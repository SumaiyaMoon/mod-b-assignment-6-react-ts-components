type ButtonProps = {
    btnValue: any
    city: any
}
export default function Button(props: ButtonProps) {
    return (
        <button className="btn btn-outline-success m-2 p-2 text-start">Name: {props.btnValue} <br />City: {props.city}</button>
    );


}
