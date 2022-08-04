import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar'
import {useHistory} from "react-router-dom"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {getAuth,signOut} from "firebase/auth"
import {client} from "../firebase"
import { onSnapshot, query, where } from 'firebase/firestore';
import { Avatar, makeStyles } from '@mui/material';
import styles from "../Styles/auth.module.css"
function Home() {
  const history=useHistory();
  const auth=getAuth();
  const userid=localStorage.getItem('currentuser')
  // useEffect(() => {
  //   if(!userid){
  //     window.location.href='/login'
  //   }
  // },[userid])
  const handleSignout=()=>{
    signOut(auth).then(() => {
      localStorage.removeItem('currentuser')
      window.location.href='/login'
    }).catch((error) => {
      // An error happened.
    });
  }
  const na=query(client,where('userId','==',userid))
  const[image,setImage]=useState("");
  useEffect(()=>{
onSnapshot(na,client,(e)=>{
  e.docs.map((s)=>{
    setImage(s.data().userimg);
  })
})
  },[])

  const handleCart=()=>{
    window.location.href='/cart'
  }

  return (
    <>
     <div style={{display: 'flex', flexDirection:'row',justifyContent: 'space-around'}}>
      <div>
      <img src="https://cdn.dribbble.com/users/4861976/screenshots/11156667/towel.jpg" 
      style={{width:'130px',height:'80px'}}></img>
      </div>
      <div style={{marginTop:'25px'}}>
      <Navbar />
      </div>
      <div>
      <ShoppingCartCheckoutIcon style={{marginTop:'35px',fontSize:'30px',cursor:'pointer'}} onClick={handleCart}/>
      </div>
      <div style={{marginTop:'24px',
      padding:'5px',display:'flex',flexDirection:'row',justifyContent: 'center'}} >
       
        {
          image.length>0?
          <div className={styles.maindiv}> <Avatar src={image} style={{cursor:'pointer',color:'white',zIndex:'1000'}}  onClick={handleSignout}/>
            <h3 style={{marginTop:'-0px',color:'#Ff7a00'}} className={styles.button}>Logout</h3>
         </div> :<div className={styles.maindiv} > <Avatar  style={{cursor:'pointer',color:'white',zIndex:'1000'}}  onClick={handleSignout}/>
        <h3 style={{color:'#Ff7a00'}} className={styles.button}>Login</h3>
          </div>
        }
       
      </div>
 
    </div>
    
    </>
   
  )
}

export default Home