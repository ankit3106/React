import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/ankit3106')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '> Github followers : {data.followers}      
    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github image" />
    </div>
  )
}

export const githubLoaded = async () => {
  const response = await fetch('https://api.github.com/users/ankit3106')
  return response.json()
}
