import React from 'react'
import { TextField,Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Story() {
  return (<>
  <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center',height:'100vh'}}>
  <h2 style={{textAlign: 'center',color:'#Ff7a00',marginBottom:"50px",fontWeight:'600',marginTop:'-100px'}}>About Us</h2>
    <div style={{display: 'flex',flexDirection:'row',alignItems:'center',justifyContent: 'center'}}>
     <div >
          <img src="https://media.istockphoto.com/photos/soft-towels-in-showcase-in-store-picture-id579779018?k=20&m=579779018&s=612x612&w=0&h=-OJCkYyi4ZrWziu8Pefq_r9lB1nPs-yRK4NlUSwwrFY="
           style={{width:'475px',marginRight:'100px',borderRadius:'20px'}}></img>
     </div>
     <div style={{display: 'flex',flexDirection:'column',marginTop:'-5px',width:'475px'}}>
       <h2>KKV Textiles</h2>
          <p style={{marginTop:'-13px',textIndent:'90px'}}>
            We are manufacturing and selling different types and diferent varities of towel for more than two years.
            Just proud of us to describe here that we are the number one manufacturer and seller to many shops and textiles 
            shops Currently . You can get bulk and small amount of product at any time you want .Just feel 
            happy to get contact us and make proud of you . we had a towels like Bath towel , Hand Towels , Clean Up Towels ,
            Beach Towels , Decorative Towels , Face towel with small ,Gym Towels ,Pet Towel  , Tea Towel with small , 
            medium and  large sized . We also provide a customized printing for Towels. 
          </p>
          <div style={{display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
            <div>
            <Button startIcon={<PhoneIcon style={{color:'white'}}/>} variant="contained" 
            style={{color:'white',marginRight:'20px'}}>9837624623</Button>
            </div>
            <div>
            <Button startIcon={<WhatsAppIcon style={{color:'white'}}/>} variant="contained" 
            style={{color:'white',marginRight:'20px'}}>9837624623</Button>
            </div>
            <div>
            <Button startIcon={<MailIcon style={{color:'white'}}/>} variant="contained" 
            style={{color:'white',marginRight:'20px'}}>Gmail</Button>
          </div>
          </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default Story