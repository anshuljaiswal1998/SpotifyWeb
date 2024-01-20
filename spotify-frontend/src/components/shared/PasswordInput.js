const PasswordInput = (props) => {
    return (
        <div className="textInput flex flex-center flex-col w-full space-y-2">
            <div id={props.label} className="my-2 font-semibold"> {props.label} </div>
            <input className=" rounded border border-gray-400 my-3 p-2" placeholder={props.placeholder} type="password" name="input" id={props.label} />
        </div>
    )
}

export default PasswordInput;