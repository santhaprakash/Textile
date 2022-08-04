import { Button } from '@mui/material'
import React from 'react'

function Admin() {
  return (
    <>   
    <div style={{display:'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
    <Button variant="outlined" onClick={()=>window.location.href="/"}
    style={{marginTop:'50px'}}
    >Shooping</Button>
        <h2 style={{textAlign: 'center',fontWeight:'600'}}>KKV Textiles</h2>
  
        <Button variant="outlined" style={{marginTop:'220px',color:'black',border:'1px solid #Ff7a00'}}
        onClick={()=>window.location.href="/Addproduct"}
        > Add Product</Button>
        <Button variant="outlined" style={{marginTop:'25px',color:'black',border:'1px solid #Ff7a00'}}
        onClick={()=>window.location.href="/manageorder"}
        > Manage Orders</Button>
    </div>
    </>
  )
}

export default Admin