import { useState } from "react";
import { useHistory } from "react-router-dom";

function Add() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    const [formData, setformData] = useState({
        name: "",
        image: "",
        type: ""
    })

    const history = useHistory();

    // const data = {
    //     name: name,
    // };


    const onChange = (e: any) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e: any) => {
        e.preventDefault();
        console.log(formData);
        setformData({
            name: "",
            image: "",
            type: ""
        })
        history.push("/")
    }


    return (
        <div className="container">
            <h2 className="text-2xl font-bold text-center">ADD POKENMON</h2>
            <div className="d-flex justify-content-center">

                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label htmlFor="name">Pokemon Name</label>
                        <input type="text" onChange={onChange} name="name" value={formData.name} className="form-control" placeholder="Pokemon Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Image </label>
                        <input type="text" onChange={onChange} name="image" value={formData.image} className="form-control" placeholder="Pokemon Image" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Type </label>
                        <input type="text" onChange={onChange} name="type" value={formData.type} className="form-control" placeholder="Pokemon Type" />
                    </div>



                    {/* <div className="form-group">
                        <label htmlFor="name">Abilities </label>
                        <input type="text" className="form-control" placeholder="Pokemon Name" />
                    </div> */}


                    {/* 
                    <div className="form-group">
                        <label htmlFor="name">Moves </label>
                        <input type="text" className="form-control" placeholder="Pokemon Moves" />
                    </div> */}

                    <button type="submit" className="btn btn-info mt-4 mb-5">Submit</button>
                </form>
            </div>
            {/* <form className="">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Enter your name"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="email"
                    placeholder="Enter your email"
                />
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter your phone no."
                />
                <button
                    className=""
                    type="submit"
                    onClick={submitForm}
                >
                    ADD USER
                </button>
            </form> */}



        </div>
    );
}

export default Add;