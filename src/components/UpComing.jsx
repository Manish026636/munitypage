import React from 'react'

const UpComing = () => {
  return (
    <div>
    <div className="bg-white py-6 sm:py-8 lg:py-28">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Upcoming MUNs</h2>
  
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Get the latest update on our Collaborations here</p>
      </div>
  
      <div className="grid gap-6 sm:grid-cols-2">
        <a href="#" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="cluc.png" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <div className="relative flex flex-col">
            <span className="text-lg font-semibold text-white lg:text-xl">CLUCMUN</span>
          </div>
        </a>
     
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default UpComing
