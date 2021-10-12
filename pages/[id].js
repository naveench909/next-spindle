import { useRouter} from 'next/router';
import { useEffect , useState } from 'react';
import Modal from 'react-modal';
import data from '../Data/feeds'
import PostModal from '../components/PostModal';

const FeedId = () => {
    // const [reloadCount , setReloadCount] = useState(false);
    const router = useRouter();

    // var newId ;

    // function intial () {
    //     const router = useRouter();
    //     newId  = router.query.id;
    //     console.log(newId)
    // }

    function navigationType(){
        // console.log("Hello")
        var result;
        var p;
    
        if (window.performance.getEntriesByType("navigation")){
           p=window.performance.getEntriesByType("navigation")[0].type;
          console.log(p);
           if (p=='reload' && reloadCount==2){
               return( 
                  <h1>hello</h1>
               )
           }
        }
        return result;
    }
    // function checkFirstVisit() {
    //   if(!document.cookie===2)  
    //     document.cookie = 'mycookie=1'
    //   else{
    //       alert("refreshed");
    //   }
    //     if(document.cookie.indexOf()==-1) {
    //       // cookie doesn't exist, create it now
    //       document.cookie='mycookie=2'
    //     }
       
    //   }


    function checkFirstVisit() {
        if(document.cookie.indexOf() == -1){
            document.cookie = 'mycookie=1'
        }else{
            alert("refreshed");
        }
    }

    useEffect(() => {
        // if (window.performance ) {
        //     console.info("window.performance works fine on this browser");
        // }

        // navigationType();
        // setReloadCount(reloadCount + 1);

        checkFirstVisit();       
    }, [])
    

    return ( 
        // <Modal style={{postion:'relative' , width:'60vw'}} isOpen={true}>
        <div>
            {/* {reloadCount ? <PostModal data={data[0]} /> : <h1>Hello</h1>} */}
            {/* <PostModal data={data[0]}/> */}

            <h1>About current post</h1>
            
        </div>
        // </Modal>
    );
}
 
export default FeedId;