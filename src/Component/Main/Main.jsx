
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthControl";




const Main = () => {

    const { user, logout } = useContext(authContext);
    const handleLogout = () => {
        logout()
            .then(result => {
                alert('succes')
            })
            .catch(error => {
                alert('fail')
            })
    }
    console.log(user)
    return (
        <div>
            <div>
                <div className=" max-w-7xl mx-auto">
                    <div className="navbar bg-[#D0D9E5]">
                        <div className="flex-1">
                            <img src="/logo.jpg" alt="" />
                        </div>

                        <div className="lg:flex gap-10">
                            <div className="">
                                <Link to={'/'} className="text-2xl ml-10 font-semibold">Home</Link>
                                <Link to={'/product'} className="text-2xl ml-10 font-semibold">Add Product</Link>
                                <Link to={'/card'} className="text-2xl ml-10 font-semibold">Add Card</Link>

                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user ?
                                            <img src={user?.photoURL} /> :
                                            <img src="/profile.png" />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3  p-2 shadow menu  dropdown-content bg-base-100 rounded-box w-64 z-10">
                                    <li>

                                        {
                                            user ? <span className="">Name : {user?.displayName} </span> :
                                                <span className=""> Name : </span>
                                        }

                                        {user ? <a className="justify-between whitespace-nowrap">Email : {user?.email}</a> :
                                            <a className="justify-between">Email : </a>
                                        }

                                    </li>
                                </ul>
                            </div>
                            <div>
                                {
                                    user ? <Link onClick={handleLogout} className="text-2xl font-semibold bg-slate-600 text-white px-2 py-1 rounded">LogOut</Link> :
                                        <Link to={'/login'} className="text-2xl font-semibold bg-slate-600 text-white px-2 py-1 rounded">Login</Link>
                                }

                            </div>
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

export default Main;