import styles from './dropdownmodal.module.css'
import ReactDOM from "react-dom";
import React ,{ useState } from 'react'

import Link from 'next/link'

function DropdownModal(props) {

    if(!props.show){
        return null
    }

    return ReactDOM.createPortal (    
    <div onClick={props.onClose}>    
        <div className={styles.container} onClick={e => e.stopPropagation()}>
            <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                <h2 className={styles.title}>Switch Channel</h2>
            </div>            
                <div className={styles.first}>
                    <div className={styles.single}>
                        <label>My Feed</label>
                        <Link href="/"><a>
                        <input onClick={props.onClose} className={styles.radio} type="radio" name="channel"  />
                        </a></Link>
                    </div>
                </div>

                <div className={styles.second}>
                    <div className={styles.single}>
                        <label>General</label>
                        <input onClick={handleClick}  className={styles.radio} type="radio" name="channel" value="Genral" />
                    </div>
                    <div className={styles.single}>
                        <label>Catheterization</label>
                        <input onClick={handleClick} className={styles.radio} type="radio" name="channel"  value="Catheterization" />
                    </div>
                    <div className={styles.single}>
                        <label>Acute Care</label>
                        <input onClick={handleClick} className={styles.radio} type="radio" name="channel" value="Acute Care" />
                    </div>
                </div>

                <div className={styles.third}>
                    <div className={styles.single}>
                        <label>Saved posts</label>
                        <Link href="/savedPosts"><a>
                        <input onClick={props.onClose} className={styles.radio} type="radio" name="channel"  />
                        </a></Link>
                    </div>
                </div>
        </div>
    </div> 
    ,
    document.getElementById("modal-root"),  
    )

    // const handleSelect = (e) => {
    //     console.log(e)
    // }

    // // return (
    // //     <DropdownButton
    // //         alignRight
    // //         title="Dropdown right"
    // //         id="dropdown-menu-align-right"
    // //         onSelect={handleSelect}
    // //     >
    // //                 <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
    // //                 <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
    // //                 <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
    // //                 <Dropdown.Divider />
    // //                 <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
    // //   </DropdownButton>
    // // )
}

export default DropdownModal
