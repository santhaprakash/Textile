import { onSnapshot } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {product} from "../firebase";
function Products(){
    const[pro,setPro]=useState([]);
    useEffect(()=>{
        onSnapshot(product,(e)=>{
            const post=[]
            e.docs.map((s)=>{
                post.push({...s.data(),id:s.id})
            })
            setPro(post);
        })
    })
    // console.log(pro);
    const handleRoute=(e)=>{
        window.location.href=e;
    }
    return (
        <>
        <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}> 
        <h2 style={{textAlign: 'center',color:'#Ff7a00',marginBottom:"30px",fontWeight:'600',marginTop:'50px'}}>Our Products</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,300px)',marginTop:'30px'}}>
            {
                pro && pro.map((e)=>{
                    return(
                        <div style={{backgroundColor:'#e6e6e6',padding:'15px',marginBottom:'20px',width:'250px',height:'250px'}}>                          
                        <img src={e.img} style={{width:'250px',height:'200px',cursor:'pointer'}} onClick={()=>handleRoute(e.name)}></img>                       
                        <h4 style={{textAlign:'center'}}>{e.name}</h4>
                       </div>
                    )                    
                })
            }
           
        </div>
        </div>
        </>
    )
}
export default Products;