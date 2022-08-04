import { Button } from '@mui/material';
import { deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import React,{useEffect,useState} from 'react'
import {cart} from "../firebase";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
function Cart() {
    const[carts,setCarts]=useState([]);
    const userId=localStorage.getItem('currentuser')
    const na =query(cart,where("user",'==',userId))
     useEffect(()=>{     
        onSnapshot(na,cart,(e)=>{
            const post=[]
            e.docs.map((s)=>{
                    post.push({...s.data(),id:s.id})
            })
            setCarts(post)
        })
     })
     const handleBuy=()=>{
        window.location.href ='/shopping'
     }

     const deleteHandler=(e)=>{
      const temp= doc(cart, e);
      deleteDoc(temp).then(() => {
        alert("deleted sucessfully");
      });
     }
     var amount=0
  return (
   <>
    <Button variant="contained" onClick={()=>window.location.href="/"}
    style={{marginTop:'10px',marginLeft:'20px'}}
    >Back</Button>
 
    <div style={{display:'flex',flexDirection:'column',justifyContent: 'center',alignItems: 'center',marginBottom:'50px'}}>
        <h2>Cart Items</h2>
      {
        carts && carts.map((e)=>{
            return(
                <div style={{display:'flex',flexDirection:'row',marginBottom:'10px'}}>
                    <div>
                    <img src={e.img} style={{width:'200px',height:'200px'}}></img>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center',padding:'10px'}}>
                    <h3 style={{marginTop:'50px'}}>Product : {e.name}</h3>
                    <h4 style={{marginTop:'-2px'}}> Quantity :{e.count}</h4>
                    <h4 style={{marginTop:'-2px'}}> Amount :{e.count*e.prize}</h4>
                    <h3 style={{color:'white'}}>{amount=amount+e.count*e.prize}</h3>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center',marginLeft:'20px'}}>
                      <DeleteSweepIcon style={{fontSize:'32px',cursor:'pointer'}} onClick={()=>deleteHandler(e.id)} />
                      </div>
                </div>
            )
        })
      }
      <h4>Total Amount :{amount}</h4>
      <Button variant="contained" onClick={handleBuy}>Buy now</Button>
    </div>
    </>
  )
}

export default Cart