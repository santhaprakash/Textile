import React from 'react'
import styles from "../Styles/auth.module.css"
function Towel() {
  return (
    <div className={styles.hey} style={{height:'88vh',display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
     <div style={{marginRight:'100px'}}>
      <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Enjoy The Soft Feeling</h1><b></b>
      <h1>Of Our Towel</h1>
     </div>
     <div>
      <img src="https://images.pexels.com/photos/1304110/pexels-photo-1304110.jpeg?cs=srgb&dl=pexels-rodolpho-zanardo-1304110.jpg&fm=jpg"
      style={{width:'300px',height:'300px'}}
      ></img>
     </div>
    </div>
  )
}

export default Towel