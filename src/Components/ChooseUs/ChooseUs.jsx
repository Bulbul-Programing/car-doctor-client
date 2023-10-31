import { BsFillClockFill } from "react-icons/bs";

const ChooseUs = () => {
    return (
        <div className="mt-20">
            <div className="text-center space-y-3">
                <h1 className="text-xl font-bold text-[#FF3811] text-center">Core Features</h1>
                <h1 className="text-3xl font-bold">Why Choose Us</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex gap-x-6 mx-10 justify-center my-12">
                <img className="shadow-md px-8  rounded-xl py-6" src="https://i.ibb.co/P4bJnrz/check.png" alt="" />
                <img className="shadow-md px-8  rounded-xl py-6" src="https://i.ibb.co/R9CP5fT/deliveryt.png" alt="" />
                <div className="shadow-md px-8  rounded-xl py-6">
                    <BsFillClockFill className="text-5xl"></BsFillClockFill>
                </div>
                <img className="shadow-md px-8  rounded-xl py-6" src="https://i.ibb.co/S5Jwmnq/group.png" alt="" />
                <img className="shadow-md px-8  rounded-xl py-6" src="https://i.ibb.co/hVVrSrg/person.png" alt="" />
                <img className="shadow-md px-8  rounded-xl py-6" src="https://i.ibb.co/9pdykQR/Wrench.png" alt="" />
            </div>
        </div>
    );
};

export default ChooseUs;