import React , { useState , useEffect }from 'react'
import ReactDOM  from 'react-dom';

//StyleSheet
import styles from './dropdownmodal2.module.css'

function DropdownModal2({ show , onClose , children}) {
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
                <div className={styles.header}>
                    <h1 className={styles.title}>Switch Channel</h1>
                    {/* <button className={`btn ${styles.close}`} onClick={handleClose}>close</button> */}
                </div>
                <div className={styles.body}>{children}</div>
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

export default DropdownModal2
