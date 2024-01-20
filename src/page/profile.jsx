import React, { useEffect, useState } from "react";
import{Link, useNavigate} from "react-router-dom"
import axios from "axios";

function Profile() {

    const [data, setData] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/api/getProducts")
            .then(res => {
                setData(res.data);
            })
    }, []);
    console.log(data);


    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        <>
        {data?.map((item,index)=> (

            <React.Fragment key={index}>
        <h1>Hi {item.sellerName}</h1>
        <h2><Link to="/additems" >Add Products</Link></h2>
        <button onClick={logout}>logout</button>
            </React.Fragment>
                ))}
        </>
    )
}

export default Profile;