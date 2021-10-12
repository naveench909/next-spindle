import React, { useState } from 'react'
import Image from 'next/image'
import styles from './login.module.css'

function Login() {
    const [email , setEmail] =  useState("");
    const [password, setPassword] = useState("")

    return (
        <div className={styles.form}>
            <form className={styles.formContainer}>
                <div className={styles.logo}>
                    {/* <Image width={125} height={80}>SPINDLE</Image> */}
                    <h2>SPINDLE</h2>
                </div>
                <div className={styles.text}>Login using email</div>
                <input className={styles.email} type="text" value ={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input className={styles.password} type="password" value ={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.btn} >SUBMIT</button>
            </form>
        </div>
    )
}

export default Login
