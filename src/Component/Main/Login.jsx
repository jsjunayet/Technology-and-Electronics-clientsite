import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthControl";
import Swal from "sweetalert2";


const Login = ({ children }) => {
    const navigate = useNavigate()
    const { login, google } = useContext(authContext)
    const location = useLocation()
    const googlehadle = () => {
        console.log('helllo')
        google()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .then(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops Login...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }
    const handlelogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesfull',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops Login...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })

    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <div>
                                    <label className="label">
                                        <div className="flex gap-2">
                                            <AiFillGoogleCircle onClick={googlehadle} className="text-3xl cursor-pointer"></AiFillGoogleCircle>
                                            <AiFillGithub className="text-3xl cursor-pointer"></AiFillGithub>
                                            <AiFillFacebook className="text-3xl cursor-pointer"></AiFillFacebook>
                                        </div>
                                        <Link className="text-xl" to={'/signup'}>SignUp</Link>
                                    </label>
                                </div>

                            </div>
                            <div className="form-control ">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;