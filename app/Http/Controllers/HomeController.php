<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\ClientUser;
use App\Models\RequestList;
use App\Models\AccessLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Traits\ExamUtilities;


class HomeController extends ApiController
{
    use ExamUtilities;
    
    // input : user_id, first_name, last_name, phone_number, ref_id
    public function validateRequest( Request $request ) 
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'phone_number' => 'required',
            'ref_id' => 'required',
        ]);

        if($validator->fails()) {
            return $this->errorResponse($validator->messages(), 422);
        }
        // ------------------------------
        $checkExist = RequestList::where('ref_num', $request->ref_id)->exists();
        if($checkExist) {
            $exist_req = RequestList::where('ref_num', $request->ref_id)->get(['id', 'user_id', 'status']);
            $req_id = $exist_req[0]['id'];
            $user_id = $exist_req[0]['user_id'];
            $req_status = $exist_req[0]['status'];

            if ($user_id == $request->user_id && $req_status == 0) {
                return $this->checkDuplicateRequest($request, $req_id);

            } elseif ($user_id == $request->user_id && $req_status == 1) {
                $msg = 'Exam is done';
                return $this->errorResponse($msg, 422);

            } else {
                $msg = 'Data invalid';
                return $this->errorResponse($msg, 422);
            }
        } else {
            return $this->addNewRequest($request);
        }
    }
    
    // check duplicate Request
    public function checkDuplicateRequest($request,  $request_id) {

        $checkLink = AccessLink::where('user_id', $request->user_id)
                                    ->where('request_id', $request_id)    
                                    ->exists();
        if ($checkLink) {
            // check link status
            $temp = AccessLink::where('user_id', $request->user_id)
                                    ->where('request_id', $request_id)
                                    ->get('status');

            $link_status = $temp[0]['status'];
            if ($link_status == 0 || $link_status == 1) {
                // send again
                return $this->resendAccessToken ($request->user_id, $request_id);
            } elseif ($link_status == 2) {
                // invalid
                $msg ='Link Expired';
                return $this->errorResponse($msg, 422);
            }
        } else {
            // submit New Link
            $access_token = $this->makeRandomToken();
            $exam_code = $this->makeRandomCode();

            $exam_access_link = new AccessLink([
                'user_id' => $request->user_id,
                'request_id' => $request_id,
                'access_token' => $access_token,
                'exam_code' => $exam_code,
                'status' => 0,
                'expired_time' => Carbon::now()
            ]);
            $exam_access_link->save();

            // send sms
            $exam_url = $access_token;
            return $this->successResponse($exam_url, 201);
        }
    }

    // add New Request
    public function addNewRequest($request) {
        // ClientUser
        $ClientUserExist = ClientUser::where('id', $request->user_id)->exists();
        if($ClientUserExist) {
            ClientUser::where('id', $request->user_id)->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone_number' => $request->phone_number
            ]);
        } else {
            $new_ClientUser = new ClientUser([
                'id' => $request->user_id,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone_number' => $request->phone_number
            ]);
            $new_ClientUser->save();
        }

        // RequestList
        $new_request = new RequestList([
            'user_id'=> $request->user_id,
            'ref_num' => $request->ref_id,
            'type' => 'exam',
            'status' => 0,
            'date' => Carbon::now()
        ]);
        $new_request->save();

        // AccessList
        $request_id = RequestList::where('ref_num', $request->ref_id)->get('id');
        $request_id = $request_id[0]['id'];
        $access_token = $this->makeRandomToken();
        $exam_code = $this->makeRandomCode();
        $exam_access_link = new AccessLink([
            'user_id' => $request->user_id,
            'request_id' => $request_id,
            'access_token' => $access_token,
            'exam_code' => $exam_code,
            'status' => 0,
            'expired_time' => Carbon::now()
        ]);
        $exam_access_link->save();
        
        //sendSms 
        $exam_url = $access_token;
        return $this->successResponse($exam_url, 201);
    }

    // Resend Access Token
    public function resendAccessToken ($user_id, $request_id) {

        $access_token = AccessLink::where('user_id', $user_id)->where('request_id', $request_id)->get('access_token');
        $access_token = $access_token[0]['access_token'];
        $ClientUser_info = ClientUser::where('id', $user_id)->get(['first_name', 'last_name', 'phone_number']);
        
        $exam_url = $access_token;
        // send sms
        return $this->successResponse($exam_url, 201);
    }

}
