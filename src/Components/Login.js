import { TextField,Button } from '@mui/material'
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
function Login() {
  const[mail,setMail]=useState("");
  const history=useHistory();
  const[pass,setPass]=useState("");
  const auth=getAuth();
 
  const userid=localStorage.getItem('currentuser');
    useEffect(()=>{
      if(userid){
      if(userid.length > 0)
         window.location.href = '/'
    }
  },[userid])

 const handleLogin=async(e)=>{
    
e.preventDefault();
try{
  await signInWithEmailAndPassword(auth,mail,pass)
  .then((e)=>{
    history.push('/admin')
   localStorage.setItem('currentuser',e.user.uid)
  })
  .catch((err)=>{
console.log(err);
  })
}
catch(e){
console.log(e);
}
  }

 
  return (
    <>
   
 <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
      <form>
    <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>     
           <TextField id="outlined-basic" label="mail" value={mail} onChange={(e)=>setMail(e.target.value)} variant="outlined" size="small"
           sx={{width:250,marginBottom:"18px"}}/>
           <TextField id="outlined-basic" label="Password" variant="outlined" size="small"
          value={pass} onChange={(e)=>setPass(e.target.value)}
          sx={{width:250,marginBottom:"18px"}}/>
           
           <Button variant="contained" onClick={handleLogin}>Login</Button>
           </div>
           </form>
        </div>

        </>
  )
}

export default Login