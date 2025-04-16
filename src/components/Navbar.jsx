import React, { useContext } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Navbar = () => {
    const {user} = useContext(AppContext);
return (
    <>
    <nav className='py-4 px-30 flex items-center justify-between min-h-30  text-gray-800'>
        <Link className='w-40 sm:w-32 lg:w-30'  to={'/'}> <img src="/src/assets/ImageGen.png" alt="logo" /></Link>
    <div>
        {
        user ? 
        <div className='flex items-center gap-10 sm:gap-15' >
            <button className='flex items-center gap-2 bg-blue-100 px-4 py-2 sm:px-6 hover:scale-110 transition-all duration-400 rounded-full'>
                <i class="fa-solid fa-star fa-xs"></i>
                <p>Credit Left: 50</p>
            </button>
            <p>UserName</p>
            <div className="group relative">
                <i className="fa-solid fa-user cursor-pointer"></i>
                <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible right-0 mt-2 p-2 bg-white rounded transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <p className="text-sm text-black cursor-pointer">Logout</p>
                </div>
            </div>
        </div> 
        :
        <div className='flex items-center gap-10' >
            <p onClick={()=>navigate('/buy')} >Pricing</p>
            <button className='bg-zinc-800 text-white py-4 px-10 rounded-full'>Login</button>    
        </div> 
        }
        <Link></Link>
    </div>
    </nav>
    
    </>
)
}

export default Navbar
