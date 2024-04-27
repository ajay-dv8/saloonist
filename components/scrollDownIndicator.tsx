import { motion } from 'framer-motion'
import Link from 'next/link'


const ScrollDownIndicator = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
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
  )
}

export default ScrollDownIndicator