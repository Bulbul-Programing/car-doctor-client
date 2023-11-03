import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import axios from "axios";

const Login = () => {

    const { loginUser, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(() => {
                swal("Success!", "Login successfully", "success");
                const userEmail = email

                axios.post('http://localhost:5000/jwt', { userEmail }, { withCredentials: true })
                    .then(res => {
                        if(res.data.success === true){
                            swal("Success!", "Login successfully", "success");
                            navigate('/')
                        }
                    })




                // axios.post('http://localhost:5000/jwt', {userEmail}, {withCredentials: true})
                // .then(res => console.log(res.data))
                // .catch(error => console.log(error.message))

                // form.reset()
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            {
                loading ? <p className="text-3xl font-bold text-center my-20"></p> :
                <div className="flex">
                    <dir className="w-1/2 px-10 ">
                        <img className='w-[350px] my-20' src="https://i.ibb.co/3YqLxtD/login.png" alt="" />
                    </dir>
                    <div className="w-1/2 px-20 mb-5 rounded-xl border-2 border-stone-400 my-20">
                        <h1 className="text-5xl font-bold text-center py-10 ">Login</h1>
                        <form onSubmit={handleLogin}>
                            <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="email" name="email" placeholder="Email" /> <br />
                            <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="password" name="password" placeholder="Password" /> <br />
                            <input className="px-4 py-3 w-full bg-[#FF3811] rounded-lg text-white text-lg font-bold cursor-pointer" type="submit" value='Login' />
                        </form>
                        <p className="text-lg font-semibold my-5">You have not account <Link to='/signUp'><span className="text-blue-400">Please Sign Up</span></Link> </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;