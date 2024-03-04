
import React from 'react';
import useGif from '../hooks/useGif';
import './Random.css';
import Spinner from './Spinner';


const Random = () => {
    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState(false);
    // const url='https://api.giphy.com/v1/gifs/random?api_key=hKoysNIXi7TLNRzYBtPQGpilDK4Vr1WW';
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
    const {gif, loading, fetchData}=useGif();
   
    function clickHandler(){
        fetchData();

    }
  return (
    <div className='rand'>
      <h2 className='randHeading'>A Random Gif</h2>
      {
        loading ? (<Spinner/>): (<img src={gif} height={250} width={250}/>)
      }
      
      <button className='btn1' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
