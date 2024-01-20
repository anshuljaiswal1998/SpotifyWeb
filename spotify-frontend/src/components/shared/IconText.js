import { Icon } from '@iconify/react';


const IconText = (props) => {
    return (
        <div className="flex justify-start items-center cursor-pointer">
            {/* Icon image */}
            <div className="icon mx-3 my-3 ">
                <Icon icon={props.iconName} color= {props.isActive ? 'white' : 'gray'} fontSize={23} />
            </div>

            {/* Icon Text */}
            <div className={`${props.isActive ? "text-white" : "text-gray-500"} hover:text-white`}>
                {props.displayName}
            </div>
        </div>
    )
}

export default IconText;