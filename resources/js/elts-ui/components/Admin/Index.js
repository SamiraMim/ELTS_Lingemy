import { Container, Row, Col, Button } from 'react-bootstrap';
import AdminHeader from './Header';
import SideMenu from "./SideMenu"

const AdminIndex = () => {
    return (
        <div className='main-wrapper main-wrapper-responsive-lg'>
            <AdminHeader/>
            <SideMenu />
            <main className='main-container container-fluid'>
                
            </main>
        </div>
    );
}
export default AdminIndex;