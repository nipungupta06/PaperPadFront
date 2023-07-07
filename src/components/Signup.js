import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";

export default function Signup() {
    let navigate = useNavigate();

    const [info, setInfo] = useState({name:"",email:"", password:"",cpassword:""});

    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        const response = await fetch(`http://localhost:8000/api/auth/createuser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:info.name,email:info.email,password:info.password})
          });
          // eslint-disable-next-line
          const data = await response.json();
          console.log(data)
          if(data.success){
            localStorage.setItem('token',data.token);
            // console.log(data.token)
            navigate("/");
          }
          
    }

    const onChange =(e)=>{
        setInfo({...info,[e.target.name]:e.target.value});
    }

    return (
        <div className='container my-4' >
            <h2 className='my-5'>Create a Account at PaperPad</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name<span style={{color:"red"}}>*</span></label>
                    <input type="text" className="form-control" id="name" name="name" value={info.name} aria-describedby="emailHelp"  onChange={onChange} required/>

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address<span style={{color:"red"}}>*</span></label>
                    <input type="email" className="form-control" id="email" name="email" value={info.email} aria-describedby="emailHelp" autoComplete='on' onChange={onChange} required/>

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password<span style={{color:"red"}}>*</span></label>
                    <input type="password" className="form-control" id="password" name="password" value={info.password} onChange={onChange} autoComplete='on' minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password<span style={{color:"red"}}>*</span></label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={info.cpassword} onChange={onChange} autoComplete='on' minLength={5} required/>
                </div>
                {/* {info.password!==info.cpassword && <div ><span style={{color:"red"}}>Enter same password in both fields</span></div>} */}
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}
