import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { addDoc } from 'firebase/firestore';
import { signInWithPopup} from "firebase/auth";
import {client} from '../firebase'

function Managerauth() {
  const userid=localStorage.getItem('currentuser')
  useEffect(()=>{
if(userid && userid.length>0){
  window.location.href='/'
}
  })

  const handleSignin=async()=>{
   
    const auth=getAuth();
    const provider =new GoogleAuthProvider();
    try{
      const res=await signInWithPopup(auth,provider); 
        await addDoc(client,{
          username:res.user.displayName,
          userimg:res.user.photoURL,
          userId:res.user.uid
      })
        console.log(res);               
        localStorage.setItem('currentuser',res.user.uid)
        localStorage.setItem('userimage',res.user.photoURL)
        localStorage.setItem('username',res.user.displayName)
        window.location.href='/'
    }
    catch(e){
console.log(e);
    }
  
  }
  return (
    <>
    {
      userid?window.location.href='/':<>
          <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column',marginTop:'150px'}}>
    <h2>User</h2>
  <button  onClick={handleSignin}
   style={{color:'black',borderRadius:'10px',border:'0.5 solid black'
   ,padding:'10px 20px 10px 20px',boxSizing:'border-box',cursor:'pointer'}}>Sign in with google</button>
    </div>
      </>
    }

    </>
  )
}

export default Managerauth