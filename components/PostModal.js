import React from 'react'
import Image from 'next/image'

//Styles
import styles from './postModal.module.css'

//hooks
import { useRouter } from 'next/router';

//icons
import { GoKebabHorizontal } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import { BiLike} from "react-icons/bi";
import { VscBookmark } from "react-icons/vsc";

function PostModal({data}) {
    const router = useRouter();
    const feedId = router.query.feedId;
    // console.log(feedId);

    // const singleFeedData = data.find((feed) => {
    //     if(feed.id == feedId){
    //         return feed;
    //     }
    // });
    // console.log(singleFeedData);
    // if(feedId){
        
    // }
    const {id , name, category , text , text1 , image, lorem , photo} = data;
    return (
        <div className={styles.main}>
            <div className={styles.first}>
                <div className={styles.header}>
                    <div className={styles.firstSection}>
                        <Image className={styles.photo} src={photo} width='40px' height='40px'/>
                        <div className={styles.nameAndCategory}>
                            <h4>{name}</h4>
                            <h3>{category}</h3>
                        </div>
                    </div>
                    <div >
                        <button className={styles.optionBtn}>
                            <GoKebabHorizontal />
                        </button>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{text}</p>
                </div>
                
                <div className={styles.content}>
                    <h3>{text1}</h3>
                    <div className={styles.imageContainer} >
                    <Image src={image} width='300px' height='250px' />
                    </div>
                    <p>{lorem}</p>
                </div>

                <div className={styles.footer}>
                    <div className={styles.sharePart}>
                        <p>Copy event link</p>
                        <FaShare style={{fontSize:'20px', marginLeft:'10px'}} />
                    </div>
                    <div className={styles.likesPart}>
                        124 Likes
                        <BiLike style={{fontSize:'23px' , marginLeft:'5px'}} />
                        <div style={{alignItems:'start'}}>
                            <VscBookmark style={{width:'100%' ,fontSize:'22px' , margin : '3px 0 0 13px'}} />
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.second}></div>
        </div>
    )
}

export default PostModal