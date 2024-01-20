import { useNavigate } from "react-router-dom";
import{Link} from "react-router-dom"
import React, {useState} from "react";
import axios from "axios"
import "../style.css"
import avatars from '/src/assets/avatar2.jpg'

function Register() {
  document.body.style.backgroundImage = "url('/bg-register.jpg')"
    const [formData, setFormData] = useState({
        username:'',
        phone:'',
        password:'',
        email:'' ,
        type: "buyer",
        image:''   
    });
    const navigate = useNavigate();

    const profilechange =(e) => {
      let profile = document.getElementById("profile");
      console.log(e.target.files);
        let file = e.target.files[0];
        convert(file)
            .then(base64 => {
                profile.src = base64;
                setFormData({...formData, image: base64})
            })
    }

    const convert=(file) => {
        return new Promise((res, rej) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                res(fileReader.result);
            }
            fileReader.onerror = (error) => {
                rej(error);
            }
        })
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
         console.log(formData); 
          const response = await axios.post('http://localhost:3000/api/register', formData);
          console.log(response.data);
          alert(response.data.msg)
          navigate("/login")
        } catch (error) {
          alert('Registration failed:' +  error.response.data.msg)
          console.error('Registration failed:', error.response.data.msg);
        }
      };

    
    return(
        <>
      <div className="registers">
      <h1>Create  profile</h1>
      <h4>Already have an account?<Link to="/login" > Login </Link></h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="avatar" >
          <img src={avatars} alt="" id="profile"  />
          <input onChange={profilechange} type="file" name="avatar" id="avatar" accept="image/*" style={{display:"none"}} />
        </label>
        <label> Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
            Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange}  />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Type:
          <select name="type" id="type" onChange={handleChange}>
          <option value="buyer">buyer</option>
          <option value="seller">seller</option>
          </select>
        </label>
        <input type="submit" value={"Create Profile"} />
      </form>
    </div>
        </>
    );
}

 export default Register;



