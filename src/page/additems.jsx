import React, {useEffect, useState} from "react";
import axios from "axios"
import "../additems.css"
import products from '/src/assets/addproducts.png'

function Additems() {

    const [formData, setFormData] = useState({
        itemname: '',
        description:'',
        price:'',
        products:'',
        category:''
    })

    const productChange =(e) => {
        let profile = document.getElementById("items");
        console.log(e.target.files);
          let file = e.target.files[0];
          convert(file)
              .then(base64 => {
                  profile.src = base64;
                  setFormData({...formData, products: base64})
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
        const { name, value} = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData); 
            const response = await axios.post('http://localhost:3000/api/addProducts', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            alert(response.data.msg)
            console.log(response.data);
        } catch (error) {
            alert("failed")
        }
      }

      

    return(
        <>

     
        <h1>add items</h1>
        <div className="additems">
        <form onSubmit={handleSubmit}>
            <label htmlFor="products">
                <img src={products} alt="" id="items" />
                <input type="file" onChange={productChange} name="products" id="products" accept="image/*" style={{display:"none"}} />
            </label>
            <label htmlFor=""> Item name:
                <input type="text" onChange={handleChange} id="itemname" name="itemname" value={formData.itemname} />
            </label>
            <label htmlFor=""> Category:
                <input type="text" onChange={handleChange} id="category" name="category" value={formData.category}/>
            </label>
            <label htmlFor=""> Description:
                <input type="text" onChange={handleChange} id="description" name="description" value={formData.description}/>
            </label>
            <label htmlFor="">Price:
                <input type="text" onChange={handleChange} id="price" name="price" value={formData.price}/>
            </label>
            <input type="submit" value={"Add products"} />
        </form>
        </div>
        </>

    )
}

export default Additems;