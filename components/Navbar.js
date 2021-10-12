import React from 'react'
// import Modal from 'react-modal'
import Link from 'next/link'
import Image from 'next/image'

// HOOKS
import { useState } from 'react';
import { useRouter } from 'next/router';

//COMPONENTS
import ProfileModal from './ProfileModal'
import DropdownModal2 from './DropdownModal2';

// STYLESHEET
import styles from './navbar.module.css'

// ICONS
import { HiOutlinePlusCircle } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

// DATA
import photo from '../public/photo.jpg'


function Navbar() {
    const [showModal , setShowModal] = useState(false);
    const [showProfile , setShowProfile] = useState(false);
    const [channel , setChannel] = useState("");

    // handle channel input
    const handleClick = (value) => {
        console.log("value -> " , value);
        setChannel(value);
    }

    const showProfilePopup = () => {
        setShowModal(false);
        setShowProfile(!showProfile);
    }

    const showDropdownPopup = () => {
        setShowModal(!showModal);
        setShowProfile(false);
    }

    
    
    return (
        <nav className={styles.navbar}>
            {/*First Part LOGO */}
            <div className={styles.logo}>
                <h2>SPINDLE</h2>
            </div>

            {/* Second Part center */}
            <div className={styles.center}>

                {/* My Feed */}
                <Link href="/"><a className={styles.myFeed}>My Feed</a></Link>

                {/* Channel Bar */}
                <div className={styles.channel}>
                    <input className={styles.input} type="text" placeholder="Select a channel" defaultValue={channel} />
                    <div className={styles.btn}><IoIosArrowDown  onClick={showDropdownPopup} /></div>
                </div>


                {/* Drop Down Modal */}
                <DropdownModal2 onClose={() => setShowModal(false)} show={showModal} > 
                    <div className={styles.container}>
                        <div className={styles.first}>
                            <div className={styles.single}>
                                <label>My Feed</label>
                                <Link href="/"><a>
                                <input  className={styles.radio} type="radio" name="channel"  />
                                </a></Link>
                            </div>
                        </div>

                        <div className={styles.second}>
                            <div className={styles.single}>
                                <label>General</label>
                                <input className={styles.radio} type="radio" name="channel" value="Genral" onClick={(e) => handleClick(e.target.value)} />
                            </div>
                            <div className={styles.single}>
                                <label>Catheterization</label>
                                <input  className={styles.radio} type="radio" name="channel"  value="Catheterization" onClick={(e) => handleClick(e.target.value)} />
                            </div>
                            <div className={styles.single}>
                                <label>Acute Care</label>
                                <input className={styles.radio} type="radio" name="channel" value="Acute Care" onClick={(e) => handleClick(e.target.value)} />
                            </div>
                        </div>

                        <div className={styles.third}>
                            <div className={styles.single}>
                                <label>Saved posts</label>
                                <Link href="/savedPosts"><a>
                                <input  className={styles.radio} type="radio" name="channel"  />
                                </a></Link>
                            </div>
                        </div>
                    </div>
                </DropdownModal2>

                {/* Saved Post */}
                <Link href="#"><a className={styles.savedPosts}>Saved Posts</a></Link>
            </div>

            {/* Third Part Profile */}
            <div className={styles.profileLogo}>

                {/* Thread */}
                <div className={styles.thread}>
                   <HiOutlinePlusCircle style={{fontSize:'20px' , marginTop:'2px'}} /> Start new thread
                </div>
                {/* Profile Logo */}
                <Link href="/"><a>
                    <Image className={styles.profile} onClick={showProfilePopup} src={photo} width='40px' height='40px' />
                </a></Link>
              
                {/* Profile Modal */}
                <ProfileModal style= {{marginLeft:'100rem'}} onClose={()=>setShowProfile(false)} show={showProfile} />

            </div>
        </nav>
    )
}

export default Navbar
