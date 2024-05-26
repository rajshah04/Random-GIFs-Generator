import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='background w-full min-h-screen flex flex-col'> 
      <div className='bg-white rounded-lg text-center text-2xl font-bold mt-[40px] ml-[25px] mr-[25px] p-3'>RANDOM GIFS</div>
      <div className='flex flex-col w-full items-center'>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  )
}

export default App