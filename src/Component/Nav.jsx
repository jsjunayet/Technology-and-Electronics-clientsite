import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosHome, IoIosCart, IoIosCube } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { authContext } from "./AuthProvider/AuthControl";
import Swal from "sweetalert2";

const Nav = () => {
    const links = [
        { name: "HOME", path: "/", icon: <IoIosHome /> },
        { name: "PRODUCT", path: "/product", icon: <IoIosCube /> },
        { name: "CARD", path: "/card", icon: <IoIosCart /> },
    ];

    const [open, setOpen] = useState(false);
    const controls = useAnimation();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const { user, logout } = useContext(authContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            const threshold = 78;

            if (isScrollingDown && currentScrollPos > threshold) {
                controls.start({ opacity: 0, y: -50 });
            } else {
                controls.start({ opacity: 1, y: 0 });
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, controls]);

    const closeMenu = () => setOpen(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const handleLogout = () => {
        logout()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'LogOut Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops LogOut...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                });
            });
    };

    return (
        <motion.nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md ${isDarkMode ? 'bg-gray-900 text-white' : ''}`} animate={controls} initial={{ opacity: 1, y: 0 }}>
            <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
                <Link to="/" className="font-bold text-lg md:text-2xl flex items-center font-[Poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Electronic
                </Link>

                <div className="md:hidden">
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl cursor-pointer transition-transform duration-300 transform"
                    >
                        {open ? <FiX onClick={closeMenu} /> : <FiMenu />}
                    </div>
                </div>

                <ul className={`md:flex md:items-center md:space-x-6 md:pb-0 pb-3 ${open ? 'block' : 'hidden md:block'}`}>
                    {links.map((link) => (
                        <li key={link.name} className="md:my-0 my-2">
                            <Link to={link.path} className="flex items-center text-gray-800 hover:text-gray-600 transition duration-300" onClick={closeMenu}>
                                <span className="mr-1">{link.icon}</span>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="md:my-0 my-2">
                        <div className="flex items-center text-gray-800">
                            <input type="checkbox" className="toggle toggle-success mr-2" checked={isDarkMode} onChange={toggleTheme} />
                            <span className="text-sm">Dark Mode</span>
                        </div>
                    </li>
                    <li className="md:my-0 my-2">
                        <div className="flex items-center">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full overflow-hidden">
                                        {user ?
                                            <img src={user?.photoURL || '/profile.png'} alt="user-avatar" /> :
                                            <img src="/profile.png" alt="default-avatar" />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className={`mt-3 p-2 shadow menu dropdown-content ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} rounded-box lg:w-64 w-40 z-20`}>
                                    <li>
                                        {user ? <span className="block mb-2">Name: {user?.displayName} </span> : null}
                                        {user ? <span className="block mb-2">Email: {user?.email}</span> : null}
                                        {user ?
                                            <button onClick={handleLogout} className="block w-full rounded-lg py-2 px-4 text-white text-center bg-gray-500 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Logout</button> :
                                            <Link to={'/login'} className="block w-full rounded-lg py-2 px-4 text-white text-center bg-gray-500 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Login</Link>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Nav;
