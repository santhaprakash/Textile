import React, { useEffect, useState } from 'react'
import styles from "../Styles/nav.module.css"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Avatar, makeStyles } from '@mui/material';
import {getAuth,signOut} from "firebase/auth"
import style from "../Styles/auth.module.css"
import Towel from '../Components/Towel';
import Make from '../Components/Make';
import Products from '../Components/Products';
import Story from '../Components/Story';
import Contact from "../Components/Contact"
import { onSnapshot, query, where } from 'firebase/firestore';
import { client } from '../firebase';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
function Nav() {
    const auth=getAuth();
    const[image,setImage]=useState("");
    const userid=localStorage.getItem('currentuser')
    const na=query(client,where('userId','==',userid));

    useEffect(()=>{
      onSnapshot(na,client,(e)=>{
        e.docs.map((s)=>{
          setImage(s.data().userimg);
        })
      })
        },[])

        




    const handleSignout=()=>{
        signOut(auth).then(() => {
          localStorage.removeItem('currentuser')
          localStorage.removeItem('userimage')
          localStorage.removeItem('username')
          window.location.href='/login'
        }).catch((error) => {
          // An error happened.
        });
      }
    const handleCart=()=>{
        window.location.href='/cart'
      }
      console.log(image)

      const adminHandle=()=>{
        let password=prompt("Enter Password to manage Admin page");
        if(password=="textile"){
          window.location.href="/admin";
        }else{
          alert("Your password is Wrong")
        }
      }
      
  return (
    <>
    {
      userid?<>
        <div>

<div style={{display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',height:'100px'}} >
    <div>
    <img src="https://cdn.dribbble.com/users/4861976/screenshots/11156667/towel.jpg" 
style={{width:'130px',height:'80px'}}></img>
    </div>
    <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}} >
        <a href="#towel" style={{textDecoration: 'none',color:'black'}} className={styles.Nav}><h3 style={{cursor:'pointer',fontWeight:'600'}} >THE TOWEL</h3></a>
        <a href="#howwe" style={{textDecoration: 'none',color:'black'}} className={styles.Nav}><h3 style={{cursor:'pointer',fontWeight:'600'}} >HOW WE MAKE</h3></a>
        <a href="#products" style={{textDecoration: 'none',color:'black'}} className={styles.Nav}><h3 style={{cursor:'pointer',fontWeight:'600'}} >PRODUCTS</h3></a>
        <a href="#about" style={{textDecoration: 'none',color:'black'}} className={styles.Nav}><h3 style={{cursor:'pointer',fontWeight:'600'}} >ABOUT US</h3></a>
        <a href="#contact" style={{textDecoration: 'none',color:'black'}} className={styles.Nav}><h3 style={{cursor:'pointer',fontWeight:'600'}} >CONTACT</h3></a>
    </div>
   
    <div style={{padding:'5px',display:'flex',flexDirection:'row',justifyContent: 'center'}} >
    <AdminPanelSettingsIcon  style={{fontSize:'30px',cursor:'pointer',marginRight:'70px'}} onClick={adminHandle}/>
<ShoppingCartCheckoutIcon style={{fontSize:'30px',cursor:'pointer',marginRight:'40px'}} onClick={handleCart}/>
{
  image.length>0?
  <div className={style.maindiv}> <Avatar src={image} style={{cursor:'pointer',color:'white',zIndex:'1000',marginRight:'20px'}}  onClick={handleSignout}/>
    <h3 style={{color:'#Ff7a00'}} className={style.button}>Logout</h3>
 </div> :<div className={style.maindiv} > <Avatar  style={{cursor:'pointer',color:'white',zIndex:'1000',marginRight:'20px'}}  onClick={handleSignout}/>
<h3 style={{color:'#Ff7a00'}} className={style.button}>Login</h3>
  </div>
}

</div>

</div>
<div>
    <div id="towel">
     <Towel/>
    </div>
    <div id="howwe" >
     <Make />
    </div>
    <div id="products" >
    <Products />
    </div >
    <div id="about"  >
    <Story />
    </div>
    <div id="contact" >
    <Contact />
    </div>
</div>
</div>
      </>:window.location.href='/login'
    }
    </>
  )
}

export default Nav