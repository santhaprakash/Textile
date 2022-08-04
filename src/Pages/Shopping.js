import { Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import styles from "../Styles/Contact.module.css";
import emailjs from "emailjs-com";
import {client,order,cart} from "../firebase"
import { addDoc, arrayUnion, doc, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
function Shopping() {
    
    const[carts,setCarts]=useState([]);
    const userId=localStorage.getItem("currentuser")
    const na= query(cart,where("user","==",userId));
     useEffect(()=>{
        onSnapshot(na,cart,(e)=>{
            const post=[]
            e.docs.map((s)=>{
                    post.push({...s.data(),id:s.id})
            })
            setCarts(post)
        })
     })
    const user=localStorage.getItem('currentuser')
    const username=localStorage.getItem('username')
  
  const [mail, setMail] = useState("");
  const [house, setHouse] = useState("");
  const[city,setCity]=useState("");
  const[pin,setPin]=useState("");
  const form = { useRef };

  var amount=0;
  var count=0;
   
  const handleSubmit = (e) => {
    e.preventDefault();
    
    addDoc(order,{
        user:user,
        name:username,
        address:house+","+city+","+pin,
    })
  
    emailjs
      .sendForm(
        "service_r6yy8ib",
        "template_xnmzj0r",
        form.current,
        "user_nOaMpicfl8w5ryUcymy4W"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setMail("");
    setHouse("");
    setPin("");
    setCity("");
  };
  const temp=query(order,where('user','==',user))
  const[orderid,setOrderid]=useState("")
  useEffect(()=>{
      onSnapshot(temp,order,(e)=>{
        e.docs.map((s)=>{
            setOrderid(s.id)
        })
    })
  },[])
  
  {
    if(orderid ) {
      const updateRef=doc(order,orderid)
      for(let i=0;i<carts.length;i++){
        updateDoc(updateRef,{
        data:arrayUnion({"name":carts[i].name,"count":carts[i].count,"prize":carts[i].prize})
        })
      }
    }
   
  }
  
  return (
    <>
     <Button variant="contained" onClick={()=>window.location.href="/cart"}
    style={{marginTop:'10px',marginLeft:'20px'}}
    >Back</Button>
    {
        carts && carts.map((e)=>{
            return(
                <div >
                    <h3 style={{color:'white'}}>{amount=amount+e.count*e.prize}</h3>
                    <h3 style={{color:'white'}}>{count=count+1}</h3>
                </div>
            )
        })
      }
    <div className={styles.root} style={{marginTop:'-100px'}}>
      <h3 style={{fontWeight:'500'}}>Welcome..{username}</h3>
      <form ref={form} onSubmit={handleSubmit}>
        <label>Email id</label>
        <br />
        <input
          type="email"
          name="mail"
          value={mail}
          placeholder="hey@gmail.com"
          onChange={(e) => setMail(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label>House No Street Name</label>
        <br />
        <input
          type="text"
          placeholder="7/49 hey street"
          name="house"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          className={styles.inputbox}
        ></input><br/>
         <label>City ,Town</label>
        <br />
        <input
          type="text"
          placeholder="salem,attur"
          name="message"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br/>
          <label>Pincode</label>
        <br />
        <input
          type="text"
          placeholder="636105"
          name="message"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <div  style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom:'15px'
          }}>
        <label>Cash on Delivery</label>
          <input type="checkbox">
          </input><br/>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           
          <Button
            variant="contained"
            style={{ backgroundColor: "#F4511E" }}
            onClick={handleSubmit}
          >
           Place Order
          </Button>
          
        </div>
      </form>
    </div>
    </>
  );
}

export default Shopping;
