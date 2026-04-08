'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';




const Nav = () => {


    const links = [
        {
            name:'Home',
            path:"/"
        },
        {
            name:'Service',
            path:"/service"
        },
        
        {
            name:'Stuff',
            path:"/stuff"
        },
        {
            name:'Contact',
            path:"/contact"
        },
        
    ]
    
  const pathname = usePathname();
    return (
        <div className="">
            {
                links.map((links,index)=>{
                    return(
                        <Link href={links.path}
                         key={index}
                          className={`${links.path===pathname && "text-white border-b-2 border-accent"} capitalize font-medium hover:text-blue transition-all ml-5`}>{links.name}
                          </Link>
                    )
                    
                })
            }

            
        </div>
    );
};

export default Nav;