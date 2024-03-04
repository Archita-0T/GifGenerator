import axios from 'axios';
import { useEffect, useState } from "react";
const useGif = (tag) => {
   
    
    const url1=`https://api.giphy.com/v1/gifs/random?api_key=hKoysNIXi7TLNRzYBtPQGpilDK4Vr1WW&tag=${tag}`;
    const url2=`https://api.giphy.com/v1/gifs/random?api_key=hKoysNIXi7TLNRzYBtPQGpilDK4Vr1WW`;
    const [gif,setGif]=useState("");
    const [loading,setLoading]=useState(false);

    async function fetchData(tag){
        setLoading(true);
        const {data}=await axios.get(tag? url1 : url2);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);


    }
    useEffect(()=>{
        fetchData(tag);
    },[]);
    return {gif, loading, fetchData};
    
   
   
 
  
};

export default useGif;
