import React, { useState, useEffect } from 'react';
import authService from '../service/authService.js';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleRegister = async (e) => {
        e.preventDefault();
        
        try{
            const res = await authService.register({
                name,
                email,
                password,
            });

            localStorage.setItem("user-info", JSON.stringify(res.user));
            localStorage.setItem('token', res.token)

                alert("Registration sukses!");
                navigate("/login");
        } catch (err){
            alert(err.response?.data?.message || "Registration gagal");
        }
    };



  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
    <form 
    onSubmit={handleRegister} className='px-8 py-8 max-w-md w-full items-center justify-center rounded-3xl border-2 border-cyan-100 shadow-xl' >
        <h1 className='text-3xl font-bold text-center' >Welcome to <span className='text-sky-800' >LabCode</span>!</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center' >Please enter your identity.</p>
        <div className='mt-8' >
            <div>
                <label className='text-lg font-medium' >Username</label>
                <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white'
                    placeholder='Enter your username'
                    value={name}
                    type='text' 
                    onChange = {(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label className='text-lg font-medium' >Email</label>
                <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white'
                    placeholder='Enter your email'
                    value={email}
                    type='email'
                    onChange = {(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <label className='text-lg font-medium' >Password</label>
                <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1  bg-white'
                    placeholder='Enter your password'
                    type ='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className='mt-6 flex justify-between items-center' >
                <div>
                    <input
                        type='checkbox'
                        id='remember'
                    />
                    <label  className='ml-2  font-medium text-base' for='remember'>Remember me!</label>
                </div>
                
            </div>
            <div className='mt-6 flex flex-col' > 
                <button 
                    type='submit'
                    className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-sky-500 text-white text-lg font-bold  ' >Sign Up</button>
            </div>
            <div className='mt-5 flex gap-4 justify-center items-center' >
                <label  className='ml-2  font-medium text-base' for='remember'>Already have an account?</label>
                <Link to="/login" className='font-medium text-base text-sky-500' > Sign In</Link>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Register;
