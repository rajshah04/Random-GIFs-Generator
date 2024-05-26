import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;

const useGif = (tag) => {
    
    const [gif , setGif] = useState('') ;
    const [isLoading , setIsLoading] = useState(false) ;
    
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
    
    async function fetchData(tag){
        setIsLoading(true) ;
        const output = await axios.get(tag ? `${tagMemeUrl}` : `${randomMemeUrl}`) ;
        // axios.get(url) ;
        // console.log(output) ;
        // const {data} = await axios.get(url) ;
        // const imageSource = data.data.images.downsized_large.url ;
        const imageSource = output.data.data.images.downsized_large.url ;
        // console.log(imageSource) ;
        setGif(imageSource) ;
        // setIsLoading(false) ;
        // doing this to reduce the gap between the loader and the meme
        setTimeout(() => { 
            setIsLoading(false) ;
        }, 50);
    }

    useEffect( () => {
        fetchData('car') ;
    }, [] ) ;

    return {gif , isLoading , fetchData} ;
}

export default useGif ;