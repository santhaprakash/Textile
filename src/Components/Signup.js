import { TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {addDoc} from "firebase/firestore"
import {user} from "../firebase"
function Signup() {
   const auth=getAuth();
  const[name,setName]=useState("");
  const[mail,setMail]=useState("");
  const[password,setPassword]=useState("");
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        const res=await createUserWithEmailAndPassword(auth,mail,password);
        localStorage.setItem('currentuser',res.user.uid)
        await addDoc(user,{
          userName:name,
          mailid:mail
        })
        window.location.href='/admin'
    }
    catch(e){
    console.log(e);
    }
    
    setMail("");
    setPassword("");
    setName("");
        }

  return (
    <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
      <form  onSubmit={handleSubmit}>
<div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
<TextField id="outlined-basic" label="Name" variant="outlined" size="small"
value={name} onChange={(e)=>setName(e.target.value)}
      sx={{width:250,marginBottom:"18px"}}/>      
       <TextField id="outlined-basic" label="Mail" variant="outlined" size="small"
       value={mail} onChange={(e)=>setMail(e.target.value)}
       sx={{width:250,marginBottom:"18px"}}/>
       <TextField id="outlined-basic" label="Password" variant="outlined" size="small"
       value={password} onChange={(e)=>setPassword(e.target.value)}
       sx={{width:250,marginBottom:"18px"}}/>
       <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
       </div>
       
       </form>
    </div>
  )
}

export default Signup