import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="py-48 mx-auto max-w-7xl mt-3 px-4 sm:pt-24 md:pt-72 text-center relative">
            <Image
                src="/hero.jpeg"
                alt="hero image"
                layout="fill"
                objectFit="cover"
                className="absolute overflow-hidden rounded"
            />
            <h1 className="font-extrabold text-gray-900 relative">
                <p className="text-xl sm:text-3xl md:text-4xl">Cooking + Dressing + Marinate</p>
                <p className="text-transparent bg-clip-text text-green-400 text-4xl sm:text-6xl md:text-7xl">Oil Bodega</p>
            </h1>
            <h2 className="mt-3 max-w-md mx-auto text-white sm:text-lg md:mt-5 md:text-xl md:max-x-3xl relative">
                Discover the taste of authenticity with our olive oils
            </h2>
            <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8 relative">
                <a href="https://buildnextshop.com" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-green-500">
                    Shop Now
                </a>
                <a href="https://buildnextshop.com" className="inline-flex items-center font-semibold text-white hover:text-gray-800">
                    Learn more
                </a>
            </div>
        </div>
    )
}
