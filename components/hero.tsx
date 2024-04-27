import Link from "next/link"
import ImageCarousel from "./carousel"
import ScrollDownIndicator from "./scrollDownIndicator"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="">
        <div className="text-2xl font-bold absolute z-40 mix-blend-multiply w-full flex items-center justify-center h-full">
          test
          
        </div>
        <div className="relative ">
          <ImageCarousel/>
          
          {/* ScrollDownIndicator */}

        <div className="absolute xs:bottom-10 bottom-10 w-full justify-center items-center z-40 sm:flex hidden">
          <Link href="">
            <div className="rounded-3xl .w-[2.2rem] h-[4rem] border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full mb-1 bg-secondary"
                />
            </div>
          </Link>
        </div>
    
        </div>
      </div>
    </div>
  )
}

export default Hero

//https://www.youtube.com/watch?v=N_bTK7NLqrw