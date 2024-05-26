import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;

const Random = () => {
    
    const {gif , isLoading , fetchData} = useGif('') ;
    
    // const [gif , setGif] = useState('') ;
    // const [isLoading , setIsLoading] = useState(false) ;
    
    // const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ;
    // const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
    
    // async function fetchData(tag){
        //     setIsLoading(true) ;
        //     const output = await axios.get(tag ? `${tagMemeUrl}` : `${randomMemeUrl}`) ;
        //     // axios.get(url) ;
        //     // console.log(output) ;
        //     // const {data} = await axios.get(url) ;
        //     // const imageSource = data.data.images.downsized_large.url ;
        //     const imageSource = output.data.data.images.downsized_large.url ;
        //     // console.log(imageSource) ;
        //     setGif(imageSource) ;
        //     // setIsLoading(false) ;
        //     // doing this to reduce the gap between the loader and the meme
        //     setTimeout(() => { 
            //         setIsLoading(false) ;
        //     }, 50);
    // }
            
    // useEffect( () => {
    //     fetchData('car') ;
    // }, [] ) ;

                
    return (
        <div className="w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="underline text-2xl uppercase font-bold mt-[15px]">A Random GIF</h1>

            {
                isLoading === true ? (<Spinner />) : (<img src={gif} width="450"></img>)
            }

            <button onClick={() => fetchData()}
            className="w-3/4 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    ) ;
}

export default Random ;