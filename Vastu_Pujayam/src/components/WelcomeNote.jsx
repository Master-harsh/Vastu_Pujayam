import React from 'react'

function WelcomeNote() {
  return (
    <div className="bg-yellow-100 text-red-700 flex justify-center items-center px-4 py-2 w-full text-xl shadow-sm gap-5">
      <span className="font-medium">Welcome to my website !</span>
      <button className="bg-red-600 text-white text-xs px-4 py-1 rounded-full hover:bg-red-700 transition duration-300">
        Shop Now
      </button>
    </div>
  )
}

export default WelcomeNote