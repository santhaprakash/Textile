import React from 'react'
import Userauth from "./Userauth"
import Managerauth from "./Managerauth"
import styles from "../Styles/auth.module.css"
function Auth() {
  return (
        <div className={styles.main}>

          <div>
             <Managerauth />
          </div>
        </div>
  )
}

export default Auth