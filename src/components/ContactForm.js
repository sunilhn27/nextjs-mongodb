"use client"
import React, { useEffect, useState } from 'react'

function ContactForm() {

    const [user, setUser] = useState({
        yourName: "",
        email: "",
        message: ""
    })

    const [isSuccess, setIsSuccess] = useState(false);
    const [btndisable, setBtndisable] = useState(true);

    useEffect(() => {
        handleDisable();
    }, [user]);



    const handleDisable = () => {
        if (user.yourName !== "" && user.message !== "" && user.email !== "") {
            setBtndisable(false);
        } else {
            setBtndisable(true);
        }
    };

    const handleSubmit = async (e) => {
        console.log("first")
        e.preventDefault()

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user)
        });

        const { success } = await res.json();

        if (success) {
            setUser("");
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false)
            }, 5000)
        }

    }

    return (
        <div className='  broder-t border-stone-300'>
            <form className='flex flex-col mx-[30%] space-y-2 broder-t'>
                <label htmlFor='name'>Your Name</label>
                <input value={user.yourName || ""} onChange={(e) => setUser({ ...user, yourName: e.target.value })} className="px-2 py-2 rounded-md text-black" id="name" placeholder='Sunil' ></input>
                <label htmlFor='email'>Email</label>
                <input type="email" value={user.email || ""} onChange={(e) => setUser({ ...user, email: e.target.value })} className="px-2 py-2 rounded-md text-black" id="email" placeholder='sunilhn@gmail.com' required  ></input>
                <label htmlFor='Message'>Message</label>
                <input
                    required
                    minLength={10}
                    maxLength={20}
                    id='Message'
                    value={user.message || ""}
                    onChange={(e) => setUser({ ...user, message: e.target.value })}
                    className='h-32 px-2 py-2 rounded-md text-black'
                    placeholder='Message'
                ></input>
                {btndisable ? (
                    <button disabled className='text-xl space-y-4 mt-4 bg-gray-400 px-3 py-1 rounded-lg flex-wrap w-32'>Submit</button>) :
                    (<button onClick={handleSubmit} className='text-xl space-y-4 mt-4 bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 flex-wrap w-32'>Submit</button>)}
                <div>

                </div>
            </form>
            {isSuccess && (
                <p className='text-green-500 text-center'>Data stored successfully</p>
            )}


        </div>

    )
}

export default ContactForm

