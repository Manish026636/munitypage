import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className="overflow-x-hidden bg-white">
    

    <section className="relative py-3 sm:py-10 lg:pt-4 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
                <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Munity presents</p>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Revolutionize MUNs with Automation</h1> 
                <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Software Solutions for Smarter MUNs: Automate and Excel</p>

                <div className="relative inline-flex mt-8 group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get Started
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-16 lg:mt-10 ">
            <img className="object-cover object-top h-[8vh]  lg:h-[43vh] mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="Laptopcover.png" alt="" />
        </div>
    </section>
</div>

    </div>
  )
}

export default Hero
