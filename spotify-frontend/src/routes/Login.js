import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return <div className="w-full h-full flex flex-col items-center">
        <div className="logo p-5 border-b border-gray-300 w-full flex justify-center">
            <Icon icon="logos:spotify" width={130} />
        </div>
        <div className="content w-1/3 py-10 flex items-center justify-center flex-col">
            <div className="font-semibold mb-12">To continue, login to Spotify</div>
            <TextInput label="Enter email address or username" placeholder="Enter email address or username" />
            <PasswordInput label="Enter your password" placeholder="Enter your password" />

            <div className='w-full flex items-center justify-end my-7' >
                <button className='bg-green-500 font-semibold p-3 px-10 rounded-full' variant="contained" color="success">
                    Login
                </button>
            </div>

            <div className="h-full border border-gray-300 w-full"></div>
            <div className='my-7 font-semibold text-lg'>
                Don't have an account?
            </div>

            <div className='w-full border-2 rounded-full border-gray-400 p-3 flex items-center justify-center text-gray-500 text-sm'>
                <Link to="/signup">
                    SIGN UP FOR SPOTIFY
                </Link>
            </div>
        </div>
    </div>
}

export default LoginComponent;