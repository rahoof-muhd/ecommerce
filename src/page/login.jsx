import "../login.css"
import { useNavigate } from "react-router-dom";
import{Link} from "react-router-dom"
import React, {useState} from "react";
import axios from "axios"

function Login() {
    document.body.style.backgroundImage = "url('login.jpg')"
    const [Data, setData] =useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/login', Data); 
            console.log(response.data);
            alert(response.data.msg)
            localStorage.setItem("token", response.data.token);
                    response.data.type == "seller" ? navigate("/profile") : navigate("/");
                    return response.data.msg;
            // navigate("/profile")
        }
         catch (error) {
            alert('login failed' +  error.response.data.msg)
        //   console.error('login failed:', error.response.data.msg);
        }
    }


    return (
        <> 
        <div className="logins">
            <h1>login here</h1>
            <h4>Doesn't have an account?<Link to="/register" > Register </Link></h4>
        <form onSubmit={handleSubmit}>
            <label >
                username: <input type="text" id="uername" name="username" onChange={handleChange} />
            </label>
            <label>
                password: <input type="password" id="password" name="password"  onChange={handleChange} />
            </label>
            <input type="submit" value={"Login"} />
        </form>
        </div> 
        </>
    )
}
export default Login;