import Link from "next/link"

const Nav = () => {
  return (   
    <nav className="w-full fixed px-20 py-6 z-50 backdrop-blur-sm bg-white/30">
        <div className='flex justify-between'>
            <Link 
              href="/"
              className="text-lg font-bold"
              >
                Saloonist
              </Link>
            
            <ul className="flex gap-16">
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>    
  )
}

export default Nav