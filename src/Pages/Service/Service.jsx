import swal from 'sweetalert';
const Service = () => {


    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.serviceName.value
        const price = form.price.value
        const text = form.text.value
        const type = form.type.value
        const details = form.details.value
        const product = {name, price, text, type, details}
        console.log(product)

        fetch('http://localhost:5000/service', {
            method: 'POST', 
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                swal("Success", "Your product add", "success");
                form.reset()
            }
            
            console.log(data)})
    }

    

    return (
        <div>
            <div className="my-10 rounded-lg">
                <img src="https://i.ibb.co/7VLK9sZ/checkout.png" />
            </div>
            <div className="mx-10">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-10">
                        <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="text" name="serviceName" placeholder="Service name" />
                        <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="text" name="price" placeholder="Price" />
                        <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="text" name="text" placeholder="Text" />
                        <input className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" type="text" name="type" placeholder="Select Type" />
                    </div>
                    <textarea className="px-4 mb-4 py-3 w-full rounded-md border-2 outline-none border-gray-400 focus:border-blue-500" placeholder="Product Description" name="details" id="" cols="20" rows="5"></textarea>
                    <input className="px-4 py-3 w-full bg-[#FF3811] rounded-lg text-white text-lg font-bold cursor-pointer" type="submit" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default Service;