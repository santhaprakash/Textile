import { Button } from '@mui/material';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { product } from '../firebase';
import styles from "../Styles/Contact.module.css"

function Editproduct() {
    const {id}=useParams()
    const docRef=doc(product,id);
    const[pro,setPro]=useState([])
    useEffect(()=>{
      onSnapshot(docRef,(s)=>{   
          setPro(s.data())    
      })
        },[])

        const[name,setName]=useState("");
        const[des,setDes]=useState("");
        const[prize,setPrize]=useState();
        const[size,setSize]=useState("")
        const[length,setLength]=useState("");
        const[img,setImg]=useState("");
      
        const handleSubmit = (e) => {           
          e.preventDefault();      
            const updateRef=doc(product,id);
            updateDoc(updateRef,{
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
        };
  return (
    <div className={styles.root} style={{marginTop:'80px'}}>
        <h2>Edit product</h2>
         <form  onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={pro.name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>Description </label>
        <br />
        <textarea id="w3review" name="w3review" rows="6" cols="38" 
        value={pro.desc}
        onChange={(e) => setDes(e.target.value)} 
        >
            {pro.desc}
        </textarea>
        <br />
         <label>Image</label>
        <br />
        <input
          type="text"
          name="img"
          value={pro.img}
          onChange={(e) => setImg(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br/>
          <label>Size</label>
        <br />
        <input
          type="text"
          name="size"
          value={pro.size}
          onChange={(e) => setSize(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>Length</label>
        <br />
        <input
          type="text"

          name="size"
          value={pro.length}
          onChange={(e) => setLength(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>prize</label>
        <br />
        <input
          type="prize in Rs"
          name="prize"
          value={pro.prize}
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
           Submit 
          </Button>
          
        </div>
      </form>
    </div>
  )
}

export default Editproduct