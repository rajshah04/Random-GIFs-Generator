import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;

const Random = () => {
    
    const [tag , setTag] = useState('') ;

    const {gif , isLoading , fetchData} = useGif(tag) ;

    return (
        <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 my-[15px]">
            <h1 className="underline text-2xl uppercase font-bold mt-[15px]">Random {tag} GIF</h1>

            {
                isLoading === true ? (<Spinner />) : (<img src={gif} width="450"></img>)
            }

            <input type="text" onChange={(event) => setTag(event.target.value)} value={tag} className="w-3/4 bg-white py-2 rounded-lg mb-[3px] text-center" />
            
            <button onClick={() => fetchData(tag)}
            className="w-3/4 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    ) ;
}

export default Random ;