import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Team = () => {

    return (
        <div>
            <div className="text-center space-y-3">
                <h1 className="text-xl font-bold text-[#FF3811] text-center">Team</h1>
                <h1 className="text-3xl font-bold">Meet Our Team</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-x-6 mx-10 my-10">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/V9Q4JfH/1.jpg' alt="Shoes" /></figure>
                    <div className="card-body px-4 py-3" >
                        <h2 className="text-xl font-bold text-[#444444]">Car Engine Plug</h2>
                        <div>
                            <p className="text-[#737373] font-bold">Engine Expert</p>
                            <div className="text-2xl flex gap-x-4 mt-2">
                                <BsFacebook className="text-blue-600"></BsFacebook>
                                <BsTwitter className="text-blue-500"></BsTwitter>
                                <BsLinkedin className="text-blue-600"></BsLinkedin>
                                <BsInstagram className="text-[#FD1D1D]"></BsInstagram>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/M6J2LhK/2.jpg' alt="Shoes" /></figure>
                    <div className="card-body px-4 py-3" >
                        <h2 className="text-xl font-bold text-[#444444]">Car Engine Plug</h2>
                        <div>
                            <p className="text-[#737373] font-bold">Engine Expert</p>
                            <div className="text-2xl flex gap-x-4 mt-2">
                                <BsFacebook className="text-blue-600"></BsFacebook>
                                <BsTwitter className="text-blue-500"></BsTwitter>
                                <BsLinkedin className="text-blue-600"></BsLinkedin>
                                <BsInstagram className="text-[#FD1D1D]"></BsInstagram>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/nM8972N/3.jpg' alt="Shoes" /></figure>
                    <div className="card-body px-4 py-3" >
                        <h2 className="text-xl font-bold text-[#444444]">Car Engine Plug</h2>
                        <div>
                            <p className="text-[#737373] font-bold">Engine Expert</p>
                            <div className="text-2xl flex gap-x-4 mt-2">
                                <BsFacebook className="text-blue-600"></BsFacebook>
                                <BsTwitter className="text-blue-500"></BsTwitter>
                                <BsLinkedin className="text-blue-600"></BsLinkedin>
                                <BsInstagram className="text-[#FD1D1D]"></BsInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Team;

