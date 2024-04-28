import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input"
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Textarea } from "./ui/textarea";
import { DatePicker } from "./datePicker";


const BookingForm = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <div className="w-full flex flex-col px-20 bg-[#BE3455] py-20 gap-y-16 shadow-xl">
        <div className="">
          <div data-aos="zoom-in" className="text-7xl font-light text-white opacity-40 flex text-center justify-center    items-center ">
              Book An Appointment
          </div>

          <p data-aos="fade-up" className="text-white text-md opacity-65 text-center py-6 font-light">Fill the form to book an appointment with us. 📨😎</p>
        </div>

        <main data-aos="fade-up" className="flex flex-col gap-y-8 sm:flex-row justify-between gap-x-4 ">

            {/* <Input name="name" placeholder="Name" className="border-b-1 border-b-white bg-white rounded-none focus-visible:ring-white focus-visible:border-none"/>
            <Input name="phone" placeholder="Phone" className="border-b-1 border-b-white bg-white rounded-none focus-visible:ring-white focus-visible:border-none"/>
            
            <div className="space-y-2 w-full">             
              <Select 
                name='gender'
              >
                <SelectTrigger className="w-full border-b-1 border-b-white bg-white rounded-none focus:ring-white focus:border-none">
                  <SelectValue placeholder={ 'Select gender' } />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            

            <Button className="rounded-none border border-white text-white bg-[#BE3455] hover:bg-white hover:text-[#BE3455] transition-all duration-500 mt-4 sm:mt-[0px]"
              variant={"default"}
            >
              Send &nbsp; &nbsp; →
            </Button> */}




    <Dialog className="w-full flex">
      <DialogTrigger asChild className="w-full flex justify-center item-center">

        <div className="">
          {/* <Button variant="outline">Edit Profile</Button> */}
          <Button className="rounded-none flex self-center border border-white text-white bg-[#BE3455] hover:bg-white hover:text-[#BE3455] transition-all duration-500 py-4 px-8 md:py-8 md:px-16 text-xl font-light"
              variant={"default"}
            >
              Book an appointment &nbsp; &nbsp; →
            </Button>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]"> 
        <DialogHeader>
          <DialogTitle>Booking Form</DialogTitle>
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

          <div className="grid grid-cols-4 items-center gap-4 w-full">
            <Label htmlFor="gender" className="text-right">
              Service type
            </Label>

            <Select 
              name='gender'
            >
              <SelectTrigger className="w-full border-b-1 border-b-black">
                <SelectValue placeholder={ 'Select gender' } />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="Male">Save</SelectItem>
                <SelectItem value="Female">Style</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-1.5">
            <DatePicker  className="w-full"/>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message / Description</Label>
            <Textarea placeholder="Type your message or description here." id="message" />
          </div>        

        </div>

        <DialogFooter className="w-full">
          <Button type="submit" className="w-full">Submit</Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>

            
        </main>
        <p data-aos="zoom-in" 
          data-aos-duration="1500" 
          className="text-white text-md opacity-65 text-center py-6 font-light"
        >
            Remember, if you need to reschedule or cancel your appointment, please let us know at least 24 hours in advance. We look forward to serving you!
            ✌️</p> 
    </div>
  )
}

export default BookingForm