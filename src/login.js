import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

function Login(){
    
    const {register,handleSubmit,formState:{errors}}=useForm();
    console.log(register);


    return(
        <div>
            <form onSubmit={handleSubmit((e)=>{
                console.log(e);
            })}>
                <div  id="sec">
                    <div className="con">
                        <div className="row">
                            <div className="col">
                                <div className="per-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="login">
                                    <h3>Login Here</h3>
                                </div>
                                <div className="user">
                                    <input type="text" {...register("name",{required:"! Name is required"})} placeholder="Enter Your Name" />
                                    {errors.name && <span>{errors.name.message}</span>}
                                </div>
                                <div className="user">
                                    <input type="password" {...register("psw",{required:"! password is required"})} placeholder="Enter Your password" />
                                    {errors.psw && <span>{errors.psw.message}</span>}
                                </div>
                                <div className="login-btn">
                                    <button type="submit">Login</button>
                                </div>
                                <div className="forget">
                                    <a href="#">Don't have an account?</a>
                                </div>
                                <div className="login-choice">
                                    <h4>Login in with</h4>
                                </div>
                                <div className="login-icon">
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-whatsapp"></i>
                                    <i className="bi bi-instagram"></i>
                                    <i className="bi bi-google"></i>
                                    <i className="bi bi-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </form>
        </div>
    )
}

export default Login;

