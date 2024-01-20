const TextInput = (props) => {
    return (
        <div className="textInput flex flex-center flex-col w-full space-y-2 my-3">
            <div id={props.label} className="my-1 font-semibold"> {props.label} </div>
            <input className=" rounded border border-gray-400 my-1 p-2 font" placeholder={props.placeholder} type="text" name="input" id={props.label} />
        </div>
    )
}

export default TextInput;