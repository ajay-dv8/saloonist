import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

import AOS from 'aos';
import 'aos/dist/aos.css'


const BecomeCustomer = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

 

  return (
    <>
    <div className="text-7xl font-light text-[#BE3455] text-center pt-28">
       Join our community of loyal customers 
      
    </div>
    <Dialog>
      <DialogTrigger asChild>

        {/* <Button variant="outline">Edit Profile</Button> */}
        <div data-aos="fade-up" className='cursor-pointer border border-[#BE3455] my-16 py-6 px-16 text-[#BE3455] hover:text-white hover:bg-[#BE3455] transition-all duration-700'>
         <h1 className='text-xl'>Become a Customer</h1>
        </div>

      </DialogTrigger>

        <p className="opacity-50 text-center w-full pb-16 text-md">
          Join our online customers and get amazing advantages <br/>
          such as booking house appointments and more...  cool right  ✌️😊
        </p>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Customer Form</DialogTitle>
          <DialogDescription>
            <p className="opacity-70 text-center text-sm">
              Join our online customers and get amazing advantages <br/>
              such as booking house appointments...  cool right  ✌️😊
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" name="email" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input id="phone" type="tel" name="phone" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>

            <Select 
              name='gender'
            >
              <SelectTrigger className="w-full border-b-1 border-b-black">
                <SelectValue placeholder={ 'Select gender' } />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default BecomeCustomer
