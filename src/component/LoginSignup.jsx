import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "../cssStyling/loginsignup.css"
import { useState } from "react";

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
    const [final, setFinal] = useState("Create Account");
    
    return (
        <>
            <div className="login-body">
                <div className="container-login" >
                    <div className="header">
                        <div className="text">{action}</div>
                    </div>
                    <div className="inputs">
                        {action==="Login"?<div className="f-input"></div>:<div className="input">
                            <IoMdPerson/>
                            <input type="text" placeholder="Select a Username" required/>
                        </div>}
                        <div className="input">
                            <MdEmail/>
                            <input type="email" placeholder={action==="Login"?"Email or Username":"Email"} required/>
                        </div>
                        <div className="input">
                            <RiLockPasswordFill/>
                            <input type="password" placeholder={action==="Login"?"Password":"Set a Password"} required/>
                        </div>
                    </div>

                    {/*  captcha */}
                    <form action="?" method="POST">
                       <div class="g-recaptcha" data-sitekey="6LcXEawpAAAAABNEIj_TAv-clwpQlCvqSWdwbiQ2"></div>
                      <br/>
                      {/* <input type="submit" value="Submit" /> */}
                    </form>
                     {/*  ................................................................................................. */}






                    {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password? <span>Click Here!</span></div>}
                    <div className="final-submit">{final}</div>
                    <div className="submit-container">
                        <div className={action==="Sign Up"?"submit":"submit gray"} onClick={()=>{setAction("Sign Up"); setFinal("Create Account")}}>Sign Up</div>
                        <div className={action==="Login"?"submit":"submit gray"} onClick={()=>{setAction("Login"); setFinal("Continue")} }>Login</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup;