import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="text-center py-50  text-gray-800">
                <h2 className="text-4xl font-bold mb-2">See the magic. Try now</h2>
                <button className='sm:text-lg bg-gray-950 text-white rounded-full px-10 py-4 mt-8'>Generate Images</button>
            </div>
            <footer className=" text-gray-800 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <a href="#">
                            <img src="../src/assets/ImageGen.png" alt="Logo" className="w-20 h-20 rounded-full" />
                        </a>
                        <p className="text-sm">© {new Date().getFullYear()} ImageGen. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition">
                                    <i className="fa-brands fa-facebook-f text-xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-pink-400 transition">
                                    <i className="fa-brands fa-instagram text-xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-sky-400 transition">
                                    <i className="fa-brands fa-twitter text-xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer