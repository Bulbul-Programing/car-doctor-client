import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Rout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Rout;