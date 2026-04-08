'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiAlignJustify } from "react-icons/fi";


const  MobileNav =  ()=> {
const pathname = usePathname()

    const links = [
        {
            name: 'home',
            path:'/'
        },
        {
            name: 'staff',
            path:'/staff'
        },
        {
            name: 'login',
            path:'/login'
        }
       
       

       
    ]
  return (

    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <FiAlignJustify />
        </SheetTrigger>
    <SheetContent className="flex text-accent bg-cyan-800 flex-col">
      {/* <div className="text-center mt-20">
     {/* <h2 className="text-2xl text-green bg-white text-red-800" >{session?.data?.user?.name}</h2>
     <h2>{session?.data?.user?.type}</h2>
       {session?.data?.user?.image && <Image alt={session?.data?.user?.name} width={50} height={50} className='m-auto mt-5'   src={session?.data?.user?.image}></Image>} */}
      {/* </div> */}
       
        
          <div className="mt-32 md-40 text-center bg-cyan-500 text-md text-accent">
            <Link href="/">
            <h1 className="text-accent">SebaMile<span className="text-[#66fcc2]">.</span> </h1>
            </Link>
        

          </div>
          <nav className="flex flex-col justify-center  items-center gap-5">
            {
              links.map((links,index)=>{
                return(
                  <Link href={links.path}
                  key={index}
                  className={`${links.path === pathname && "text-[#37ff02] border-b-2 border-accent"}  text-md text-sm text-[#37ff02] capitalize hover:text-accent transition-all `}>
                    {links.name}

                  </Link>

                 
                )

              })
            }
          </nav>
          {/* {session.status === "authenticated" ? <Link className="text-center" href='' onClick={handle}><button className="btn-sm btn btn-success ">LogOut</button></Link> :  <Link className="text-center" onClick={direct} href="/api/auth/signin"><button className="btn-sm btn btn-success ">LogIn</button></Link>} */}
      
      
    </SheetContent>
  </Sheet>
  
  );
}
export default MobileNav;