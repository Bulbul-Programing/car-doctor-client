import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
    const [serviceData, setServiceData] = useState()

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])


    return (
        <div>
            <div className="text-center space-y-3">
                <h1 className="text-xl font-bold text-[#FF3811] text-center">Our service</h1>
                <h1 className="text-3xl font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-8 my-10 mx-12">
                {
                    serviceData?.map(singleData => <ServiceDetails key={singleData._id} data={singleData}></ServiceDetails>)
                }
            </div>
            <div className="flex justify-center mb-20">
                <button className="btn bg-[#FF3811] rounded-lg text-white hover:text-black font-bold">More Service</button>
            </div>
        </div>
    );
};

export default Service;


const ServiceDetails = ({ data }) => {
    const { img, title, price } = data
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src={img} alt="Shoes" /></figure>
            <div className="card-body px-4 py-3" >
                <h2 className="text-2xl font-bold text-[#444444]">{title}</h2>
                <div className="flex justify-between">
                    <p className="text-[#FF3811] text-lg font-bold">Price: {price}</p>
                    <AiOutlineArrowRight className="text-[#FF3811] text-xl font-extrabold"></AiOutlineArrowRight>
                </div>
            </div>
        </div>
    );
};
