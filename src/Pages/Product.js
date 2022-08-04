import { Button } from '@mui/material';
import { addDoc, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {product,cart} from "../firebase"
function Product() {
  const { id } = useParams();
  const[qua,setQua]=useState(1);
  const q= query(product,where("name","==",id));
  const userName=localStorage.getItem('username')
  const[pros,setPros]=useState([])
  useEffect(()=>{
    onSnapshot(q,product,(e)=>{
      const post=[]
      e.docs.map((s)=>{
        post.push({...s.data(),id:s.id})
      })
      setPros(post);
    })
  },[])
  const user=localStorage.getItem('currentuser')
  const handleCheck=async(e)=>{   
    if(user){
     await addDoc(cart,{
       img:e.img,
       count:qua,
       prize:e.prize,
       name:e.name,
       user:user,
     })
     alert("item added sucessfully");
setQua(1);
    }else{
     alert("Login to continue")
     window.location.href='/login'
    }
   }
  return (
    
    <div>
       <Button variant="contained" onClick={()=>window.location.href="/"}
    style={{marginTop:'10px',marginLeft:'20px'}}
    >Back</Button>
       {
        pros && pros.map((e)=>{
         
          return (
            <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                  <h2>Product</h2>
              <div>
                  <img src={e.img} style={{width:'400px',height:'400px'}}></img>
              </div>
                  <h3>{e.name}</h3>
                  <h6 style={{width:'400px',fontWeight:'500',marginTop:'-1px'}}>{e.desc}</h6>
                  <h5 style={{marginTop:'-2px'}}>Size: {e.size} Towel</h5>
                  <h5 style={{marginTop:'-2px'}}>length: {e.length}</h5>
                  <div style={{display: 'flex',flexDirection:'row',alignItems: 'center'}}>
                    <Button variant="outlined" style={{marginRight:'5px'}} onClick={()=>setQua(qua-1)}>-</Button>
                    <Button variant="outlined" onClick={()=>setQua(qua+1)}>+</Button>
                  </div>
                  {
                    qua>=1 ?<> <h5>{qua}</h5></>:setQua(1)
                  }
                 
                  <h4 style={{marginTop:'-1px'}}>Prize : Rs.{e.prize * qua}</h4>
                  <Button variant="contained" style={{marginBottom:'100px'}} onClick={()=>handleCheck(e)}>Add to Cart</Button>
            </div>
          )
        })
       }
        
    </div>
  )
}

export default Product