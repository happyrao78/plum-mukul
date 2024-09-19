import { FaVolumeUp } from 'react-icons/fa'; // Importing the sound icon from FontAwesome
import Logo from '../assets/logo.png'; // Importing the logo image from the assets folder

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8  text-white z-20 relative w-full">
            {/* Left Side - Logo */}
            <div className="text-4xl font-bold text-pink-500 ml-20 w-auto ">
                <img src={Logo} alt="Logo" className="w-32 h-16 inline" />
            </div>



            {/* Right Side - Icon and Button */}
            <div className="flex space-x-10 items-center mr-5">

                <a href="#" className="hover:text-red-500 text-sm transition ease-in-out duration-200">Explore</a>
                <a href="#" className="hover:text-red-500 text-sm transition ease-in-out duration-200">Careers</a>
                {/* Sound Icon */}
                <FaVolumeUp className="text-white text-xl cursor-pointer hover:text-red-500 transition ease-in-out duration-200" />

                {/* Get a Quote Button */}
                <button className=" text-white px-4 py-2 rounded-md text-sm transition ease-in-out duration-200" style={{ background: '#FF4052', border: '2px solid #FF4052' }}>
                    Get a quote
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
