
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthControl";
import Swal from "sweetalert2";
import './dark.css';
const Navbar = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    const { user, logout } = useContext(authContext);
    const handleLogout = () => {
        logout()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'LogOut Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops LogOut...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }
    console.log(user)
    return (
        <div>
            <div className="">
                <div className="max-w-7xl mx-auto ">
                    <div className="lg:flex gap-6 justify-between items-center">
                        <div className="">
                            <img src="/logo.jpg" alt="" className="h-24 w-32 object-contain" />
                        </div>

                        <div className="flex justify-center items-center gap-5">
                            <Link to={'/'} className="text-xl font-semibold">Home</Link>
                            <Link to={'/product'} className="text-xl font-semibold">AddProduct</Link>
                            <Link to={'/card'} className="text-xl font-semibold">MyCard</Link>
                            <Link><div className="flex justify-center items-center gap-4">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {user ?
                                                <img src={user?.photoURL} /> :
                                                <img src="/profile.png" />
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3  p-2 shadow menu  dropdown-content bg-base-100 rounded-box lg:w-64 w-40 z-20">
                                        <li>

                                            {
                                                user ? <span className="">Name : {user?.displayName} </span> :
                                                    <span className=""> Name : </span>
                                            }

                                            {user ? <a className="justify-between lg:whitespace-nowrap">Email : {user?.email}</a> :
                                                <a className="justify-between">Email : </a>
                                            }
                                            {
                                                user ? <Link onClick={handleLogout} className="mx-auto rounded-lg py-2 px-4 text-white text-center bg-gray-500">Logout</Link> :
                                                    <Link to={'/login'} className="mx-auto rounded-lg py-2 px-4 text-white text-center bg-gray-500">Login</Link>
                                            }

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </Link>

                        </div>

                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Outlet></Outlet>
                </div>
                <div className="my-10">

                </div>
            </div>

        </div>

    );
};

export default Navbar;