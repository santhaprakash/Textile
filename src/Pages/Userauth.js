import React from 'react'

import Useauthnav from './Useauthnav';
export default function UserAuth(){
 
  return(
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
      <h3>Organization</h3>
      <div style={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
      <Useauthnav />
      </div>
    </div>
   <div>
   </div>
    </>
  )
}