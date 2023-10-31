import { LuCalendarClock } from "react-icons/lu";
import { LiaPhoneVolumeSolid, LiaMapMarkedAltSolid } from "react-icons/lia";
const Location = () => {
    return (
        <div className="bg-black p-12 rounded-2xl mx-10 flex justify-between mb-20">
            <div className="text-white flex items-center gap-x-3">
                <LuCalendarClock className="text-4xl text-red-600"></LuCalendarClock>
                <div>
                    <p className="text-white text-xs font-medium">We are open monday-friday</p>
                    <h1 className="text-lg font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="text-white flex items-center gap-x-3">
                <LiaPhoneVolumeSolid className="text-4xl text-red-600"></LiaPhoneVolumeSolid>
                <div>
                    <p className="text-white text-xs font-medium">Have a question?</p>
                    <h1 className="text-lg font-bold">+2546 251 2658</h1>
                </div>
            </div>
            <div className="text-white flex items-center gap-x-3">
                <LiaMapMarkedAltSolid className="text-4xl text-red-600"></LiaMapMarkedAltSolid>
                <div>
                    <p className="text-white text-xs font-medium">We are open monday-friday</p>
                    <h1 className="text-lg font-bold">Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Location;