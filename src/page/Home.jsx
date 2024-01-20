import React, { useEffect, useState } from "react";
import axios from "axios";
import "../home.css"


function Home() {

    document.body.style.backgroundImage = "none";

    const [data, setData] = useState();
    // const [datas, formData]= useState({
    //     count:""
    // })

    useEffect(() => {
        axios.get("http://localhost:3000/api/getProducts")
            .then(res => {
                setData(res.data);
            })
    }, []);
    // console.log(data);

    // const handleChange = (e) => {
    //     const { name, value} = e.target;
    //     setData({ ...setData, [name]: value });
    //   };


    const addtocart = async (e) => {
        let id = e.id;
        let count = e.target[0].value;
        try {
            const response = await axios.post('http://localhost:3000/api/addCart', { id, count }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            alert(response.data.msg)
            console.log(response.data);
        } catch (error) {
            alert("Login required")
        }
    }


    return (
        <>
            {data?.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="main">
                        <div className="product" >
                            <div className="product-img">
                                <img src={item.products} alt="" height="200px" width={"200px"} />
                            </div>
                            <div className="product-details">
                                <h3><b>ITEM NAME: </b>{item.itemname}</h3>
                                <h3><b>CATEGORY:</b> {item.category}</h3>
                                <h3><b>DESCRIPTION:</b> {item.description}</h3>
                                <h3><b>PRICE: </b>  ₹{item.price}</h3>
                                <div className="but">
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        addtocart({...e,id: item._id })}}>
                                        <input type="number"  id="count" name="count"/>
                                        <button >ADD TO CART</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="empty"></div>
                    </div>

                </React.Fragment>
            ))}

        </>
    );

}


export default Home;