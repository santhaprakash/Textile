import React, { useState } from 'react'
import styles from "../Styles/Contact.module.css"
import {product} from "../firebase"
import { addDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
function Addproduct() {
  const[name,setName]=useState("");
  const[des,setDes]=useState("");
  const[prize,setPrize]=useState(0);
  const[size,setSize]=useState("")
  const[length,setLength]=useState("");
  const[img,setImg]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && des && length && size && prize && name){
      addDoc(product,{
        img:img,
        desc:des,
        length:length,
        size:size,
        prize:prize,
        name:name
     })
     setImg("");
    setDes("");
    setPrize(0);
    setName("");
    setLength("");
    setSize("");
    }
   else{
    alert("Enter all field")
   }
    
  };
  
  return (
    <div>
 <Button variant="contained" onClick={()=>window.location.href="/admin"}
    style={{marginTop:'10px',marginLeft:'20px'}}
    >Back</Button>
<div className={styles.root} style={{}}>
      <h3 style={{fontWeight:'500'}}>Add Product</h3>
      <form  onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="bath Towel"
          onChange={(e) => setName(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>Description </label>
        <br />
        <input
          type="text"
          placeholder="Its a ...."
          name="des"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          className={styles.inputbox}
        ></input><br/>
         <label>Image</label>
        <br />
        <input
          type="text"
          placeholder="www.bathtowel.jpg"
          name="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br/>
          <label>Size</label>
        <br />
        <input
          type="text"
          placeholder="small"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>Length</label>
        <br />
        <input
          type="text"
          placeholder="64*76"
          name="size"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>prize</label>
        <br />
        <input
          type="prize in Rs"
          placeholder="450"
          name="prize"
          value={prize}
          onChange={(e) => setPrize(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           
          <Button
            variant="contained"
            style={{ backgroundColor: "#F4511E",marginTop:'15px' }}
            onClick={handleSubmit}
          >
           Add Pro
          </Button>
          
        </div>
      </form>
    </div>
    </div>
  )
}

export default Addproduct