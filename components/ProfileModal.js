import React , { useState , useEffect }from 'react'
import ReactDOM  from 'react-dom';
import Image from 'next/image'

//Data
import photo from '../public/photo.jpg'
//Styles
import styles from './profilemodal.module.css'
//ICONS
import { FiArrowRight } from "react-icons/fi";

function ProfileModal({ show , onClose }) {

    const[isBrowser , setIsBrowser] = useState(false);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    useEffect(()=>{
        setIsBrowser(true);
    },[])

    const modalContent = show ? (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal}>

                <div className={styles.body}>
                    {
                    <div className={styles.main}>
                        <div className={styles.first}>
                            <Image className={styles.img} src={photo} width='40px' height='40' />
                            <div className={styles.bio}>
                                <h3>Dr. Naveen Kumar</h3>
                                pediatric Cardiologist
                            </div>
                        </div>
                        <div className={styles.second}>
                            <button>Logout</button>
                            <FiArrowRight />
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    ) : null ;

    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal')
        )
    }else{
        return null;
    }
}

export default ProfileModal
