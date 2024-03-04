import React, { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
import './Tag.css';

const Tag = () => {
    // const[gif,setGif]=useState('');
    const [tag, setTag]=useState('');
    // const[loading,setLoading]=useState(false);
    // const url='https://api.giphy.com/v1/gifs/random?api_key=hKoysNIXi7TLNRzYBtPQGpilDK4Vr1WW&tag=${tag}';
    // async function fetchData(){
    //     setLoading(true);
        
    //     const {data}=await axios.get(url);
    //     const imageSource=data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);


    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])
    const {gif, loading, fetchData}=useGif(tag);
    function changeHandler(event){
      setTag(event.target.value);

  }
   
    function clickHandler(){
        fetchData(tag);

    }
  
    
  return (
    <div className='rand1'>
      <h2 className='randHeading1'>Random {tag} Gif</h2>
      {
        loading ? (<Spinner/>): (<img src={gif} height={250} width={250}/>)
      }
      <input
      className='input' onChange={changeHandler} value={tag}
      />
      
      <button className='btn2' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag

