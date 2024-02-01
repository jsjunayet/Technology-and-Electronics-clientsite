import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthControl";
import Swal from "sweetalert2";
import './dark.css';

const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const { user, logout } = useContext(authContext);

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

    console.log(user);

    return (
        <div className={isDarkMode ? "bg-gray-800 text-white" : ""}>
            <div className={`shadow-xl  ${isDarkMode ? "bg-base-100 text-black" : "bg-gray-800 text-white"} fixed z-30 w-full`}>
                <div className="lg:flex gap-6 justify-between items-center max-w-7xl mx-auto ">
                    <div className="">
                        <img src="/logo.jpg" alt="" className="h-24 w-32 object-contain" />
                    </div>

                    <div className="flex justify-center items-center gap-5">
                        <Link to={'/'} className={`text-xl font-semibold ${isDarkMode ? "dark:text-white" : ""}`}>Home</Link>
                        <Link to={'/product'} className={`text-xl font-semibold ${isDarkMode ? "dark:text-white" : ""}`}>AddProduct</Link>
                        <Link to={'/card'} className={`text-xl font-semibold ${isDarkMode ? "dark:text-white" : ""}`}>MyCard</Link>

                        <div className="flex justify-center items-center gap-4">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user ?
                                            <img src={user?.photoURL} alt="user-avatar" /> :
                                            <img src="/profile.png" alt="default-avatar" />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className={`mt-3 p-2 shadow menu dropdown-content bg-base-100 rounded-box lg:w-64 w-40 z-20 ${isDarkMode ? "bg-base-100 text-black" : "bg-gray-300 text-white"} `}>
                                    <li>
                                        {user ? <span className="">Name : {user?.displayName} </span> : <span className=""> Name : </span>}
                                        {user ? <a className="justify-between lg:whitespace-nowrap">Email : {user?.email}</a> : <a className="justify-between">Email : </a>}
                                        {user ?
                                            <Link onClick={handleLogout} className="mx-auto rounded-lg py-2 px-4 text-white text-center bg-gray-500">Logout</Link> :
                                            <Link to={'/login'} className="mx-auto rounded-lg py-2 px-4 text-white text-center bg-gray-500">Login</Link>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" className="toggle toggle-success" checked={isDarkMode} onChange={toggleTheme} />
                        </div>
                    </div>
                </div>
                <hr className="bg-black h-1" />
            </div>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
