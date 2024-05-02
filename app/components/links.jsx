import Link from 'next/link'
 
function Links() {
  return (
    <ul>
      <li>
        <Link href="/#our-service" className='text-black dark:text-white'>SERVICES</Link>
      </li>

      <li>
        <Link href="/#about" className='text-black dark:text-white'>ABOUT US</Link>
      </li>
     
      <li>
        <Link href="/#team" className='text-black dark:text-white'>OUR TEAM</Link>
      </li>

      <li>
        <Link href="/#contact" className='text-black dark:text-white'>CONTACT US</Link>
      </li>

    </ul>
    
  ) 
} 
 
export default Links;