import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            <Image src='/me.jpg' width={128} height={77}/>
            </div>
               <Link href='/'><a>Home</a></Link>
              
               <Link href='/martinpage'><a>Links</a></Link>
        </nav>
    );
}
 
export default Navbar;