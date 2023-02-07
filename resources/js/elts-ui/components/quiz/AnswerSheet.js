import './AnswerSheet.css';

function AnswerSheet (props) {

    if (props.type === 'choice') {
        return (
            <div className="row justify-content-center">
                <div className="col">
                    <label>{props.type}</label>
                    <input type="radio" name="choice" id="" />
                </div>
            </div>
        );
    } else if (props.type === 'essay') {
        return (
            <div className="row justify-content-center">
                <div className="col">
                    <p>{props.type}</p>
                    <input type="text" name="" id="" />
                </div>
            </div>
        );

    } else if (props.type === 'blank') {
        return (
            <div className="row justify-content-center">
                <div className="col">
                    <p>{props.type}</p>
                    <input type="text" name="" id="" />
                </div>
            </div>
        );

    }
}

export default AnswerSheet;