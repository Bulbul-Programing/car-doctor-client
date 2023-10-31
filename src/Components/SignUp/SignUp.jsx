import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const SignUp = () => {

    const { createUser, googleLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value

        createUser(email, password)
            .then(() => {
                swal("Success!", "User create successfully", "success");
                from.reset()
            })
            .catch(() => {
                console.log('error');
            })
    }

    const handleGoogle = () => {
        googleLogin()
        .then((result)=> {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.massage);
        })
    }

    return (
        <div className="flex">
            <dir className="w-1/2 px-10 ">
                <img className='w-[350px] my-20' src="https://i.ibb.co/3YqLxtD/login.png" alt="" />
            </dir>
            <div className="w-1/2 px-20 mb-5 rounded-xl border-2 border-stone-400 my-20">
                <h1 className="text-5xl font-bold text-center py-10 ">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="name" name="name" placeholder="Name" /> <br />
                    <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="email" name="email" placeholder="Email" /> <br />
                    <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="password" name="password" placeholder="Password" /> <br />
                    <input className="px-4 py-3 w-full bg-[#FF3811] rounded-lg text-white text-lg font-bold cursor-pointer" type="submit" value='Sign Up' />
                </form>
                <p className="text-lg font-semibold my-5">You have account <Link to='/login'><span className="text-blue-400">Please Login</span></Link> </p>
                <div className="flex items-center gap-x-4 mb-5">
                    <p className="text-lg font-semibold ">Sign up With</p>
                    <button onClick={handleGoogle} className="btn bg-blue-400 hover:text-black text-white font-bold">Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;