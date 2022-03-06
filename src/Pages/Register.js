import React, { useState } from 'react'
import axios from "axios";

    const Register = () => {
        const [user, setUser] = useState({
            fullName: "",
            username: "",
            email: "",
            password: ""
        }
       
            )

        
            const handleChange = e =>{
                const {name,value} = e.target
                setUser({
                ...user,
                [name]:value
            
                })
                }

         const egister = (e)=>{
             e.preventDefault()
            const {fullName,username,email,password} = user
            if (fullName &&  username && email && password){
             axios.post("http://localhost:5000/app/Register",user )
             .then(res=>console.log(res))
            }
            else{
                alert("invalid input")
            }};

        return (
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Create a new account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <a href="/" target="_blank" className="text-sm text-blue-500 underline hover:text-blue-700">
                        Sign in
                    </a>
                </span>
                <div className="p-6 mt-8">
                    <form>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="fullName" value={user.fullName} onChange={handleChange} placeholder="FullName" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className=" relative ">
                                <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
                            </div>
                            <div className="flex gap-4 mb-2">
                                <div className=" relative ">
                                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={handleChange} placeholder="password" />
                                </div>
                            </div>
                            <div className="flex w-full my-4">
                            <input type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " id="create-account-email" value='Submit' onClick={(e) => egister(e)} />
                            </div>
                            </div>
                    </form>
                </div>
            </div>
        )
    }


    export default Register
