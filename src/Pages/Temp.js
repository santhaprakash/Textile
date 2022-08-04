import React,{useState} from 'react'
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { addDoc } from 'firebase/firestore';
import { signInWithPopup} from "firebase/auth";
function Temp() {
  
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const auth=getAuth();
    const handleSubmit=async(e)=>{
      e.preventDefault()
      // await addDoc(Hello,{
      //   name:"sanha"
      // })
setEmail("");
setPass("");
    } 
    const handleSignin=()=>{
      const provider =new GoogleAuthProvider();
     signInWithPopup(auth,provider)
     .then((res)=>{
       window.location.href='/'
     })
     .catch((e)=>{
console.log(e);
     })
    }



      return (
    <div>
        <form type="submit" onSubmit={handleSubmit}>
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
{/* <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}></input> */}
<button type="submit" onClick={handleSubmit}>submit</button>
</form >

<button onClick={handleSignin}>Login with google</button>
    </div>
  )
}

export default Temp