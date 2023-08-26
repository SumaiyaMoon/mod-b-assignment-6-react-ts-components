
type InputProps = {
    inputType: string;
    inputValue: string;
}

function Input(props: InputProps) {

    return (
        <div>
            <label>Fill the required Info</label>
            <input type={props.inputType} className="form-control" placeholder={props.inputValue} />
            <button className="btn btn-success m-2">Submit</button>
        </div>
    )

}
export default Input;