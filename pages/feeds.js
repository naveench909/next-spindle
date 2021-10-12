import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Modal from 'react-modal';

//HOOKS
import { useRouter } from 'next/router';

//DATA
import data from '../Data/feeds';

//STYLES
import styles from '../styles/feeds.module.css';

//COMPONENTS
import PostModal from '../components/PostModal';

//ICONS
import { GoKebabHorizontal } from "react-icons/go";

const Feed = () => {
    // console.log(data);

    // used for data passing to child 
    var singleFeed = null;

    const router = useRouter();

    return (
        <div >
            {data.map((feed) => {
                singleFeed = feed;
                const {id , name, category , text , text1 , image, lorem , photo} = feed;
                return (
                    <div className={styles.main} key={id}>
                        <div className={styles.header}>
                            <div className={styles.firstSection}>
                                <Image className={styles.photo} src={photo} width='40px' height='40px'/>
                                <div className={styles.nameAndCategory}>
                                    <h3>{name}</h3>
                                    {category}
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

                        <Link href={`/?feedId=${id}`} as={`/${id}`} ><a>
                            <div className={styles.content}>
                                <h3>{text1}</h3>
                                <div className={styles.imageContainer} >
                                <Image src={image} width='300px' height='250px' />
                                </div>
                                <p>{lorem}</p>
                            </div>
                        </a></Link>

                        <div className={styles.footer}>
                            12 comments
                        </div>
                    </div>
                )
            })}

            <Modal className={styles.profileModal} ariaHideApp={false} isOpen={!!router.query.feedId} onRequestClose={()=> router.push("/") }>
                <PostModal data={singleFeed}/>
            </Modal>
        </div>
    )
}
 
export default Feed;