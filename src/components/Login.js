import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
export default function Login() {
    const [error, setError] = useState(false)
    let navigate = useNavigate();
    const [info, setInfo] = useState({email:"", password:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:info.email,password:info.password})
          });
          // eslint-disable-next-line
          const data = await response.json();
          console.log(data)
          if(data.success){
            localStorage.setItem('token',data.token);
            navigate("/");
          }
          else{
            console.log(data)
            setError(true)
            setInfo({email:"", password:""})
          }
          
    }
    const onChange =(e)=>{
        setInfo({...info,[e.target.name]:e.target.value});
    }
    return (
        <div className='container my-4' >
            <h2 className='my-5'>Login to PaperPad</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={info.email} aria-describedby="emailHelp"  onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={info.password} onChange={onChange} />
                </div>
                <p class={`${error===false? "invisible":""} `} style={{color:"red"}}>Try again with valid credentials</p>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
