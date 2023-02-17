import React from 'react'

function Tag({name} : {name: string}) {
  return (
    <div className=' px-4 py-2 bg-gray-800 opacity-70 text-gray-300 rounded-3xl flex justify-center items-center text-xs'>{name}</div>
  )
}

export default Tag