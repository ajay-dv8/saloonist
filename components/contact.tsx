import React from 'react'
import { Input } from './ui/input'
import ContactComponent from './contact/contact'

const Contact = () => {
  return (
    <div className='w-full'>


      <div className="flex">
        <ContactComponent/>
      </div>

      {/* <div className="">
        <div className="flex flex-row justify-between gap-x-4">
          <div className="flex flex-col gap-y-2">
            <span className="text-2xl font-bold text-white">Address</span>
            <span className="text-xl text-white">1234 Main St</span>
            <span className="text-xl text-white">San Francisco, CA 94107</span>
          </div>

          <div className="flex flex-col gap-y-2">
            <span className="text-2xl font-bold text-white">Email</span>
            <span className="text-xl text-white">ajaydives@gmail.com</span>
          </div>  
        </div>
      </div>  */}

    </div>

  )
}

export default Contact