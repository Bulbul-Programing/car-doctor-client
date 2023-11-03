import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';


const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
        .then(() => {
            swal("Success!", "Log out successfully", "success");
        })
        .catch(() => console.log('error'))
    }
    return (
        <div>
            {
                loading ? <p className="text-3xl font-bold text-center my-20">loading....</p> :
                 <div className="navbar bg-base-100 shadow-lg px-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm text-lg font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/service'>Services</Link></li>
                                {/* <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li> */}
                            </ul>
                        </div>
                        <img className="w-[60px]" src="https://i.ibb.co/S7pqqBt/logo.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal items-center px-1 text-lg font-semibold">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='about'>About</Link></li>
                            <li><Link to='service'>Services</Link></li>
                            {/* <li><Link to='blog'>Blog</Link></li>
                    <li><Link to='contact'>Contact</Link></li> */}
                            {
                                user ? <button onClick={handleSignOut} className="btn bg-[#ff5634cb] text-white">log Out</button> : <Link to='/login'><button className="btn bg-[#ff5634cb] text-white">Login</button></Link>
                            }
                        </ul>
                        <p className="text-lg font-semibold ml-5">{user?.email}</p>
                    </div>
                    <div className="navbar-end">
                        <Link><button className="btn btn-outline outline-[#FF3811] text-lg text-[#FF3811]">Appointment</button></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;