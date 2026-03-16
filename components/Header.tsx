import Image from "next/image"

const Header=()=>{
    return(
        <header className="py-8 px-12" >
        <Image src="logo.svg" alt="Logo"   width={163}
  height={38}/>
  </header>
    )
}


export default Header