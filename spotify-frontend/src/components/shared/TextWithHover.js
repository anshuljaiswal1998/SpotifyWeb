const TextWithHover = (props) => {
    return (
        <div className="flex justify-start items-center cursor-pointer">
            {/* Icon Text */}
            <div className={`${props.isActive ? "text-white" : "text-gray-500"} hover:text-white font-semibold`}>
                {props.displayName}
            </div>
        </div>
    )
}

export default TextWithHover;