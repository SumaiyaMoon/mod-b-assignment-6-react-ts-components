type selectProps = {
  options: any[]
}
export default function Select(props: selectProps) {
  const { options } = props;
  return (
    <div>
      <select className="p-2">
        {props.options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
};