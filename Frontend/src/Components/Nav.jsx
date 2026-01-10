function Nav(){
    return(
        <>
        <nav className="bg-[#061E29] text-white py-3 px-4 flex items-center justify-between">
    <a className="font-bold text-xl tracking-tight" href="https://www.kriteshbhattrai.com.np">Kritesh</a>
    <div className="flex items-center">
        <a className="text-[#F3F4F4] px-4 py-2 leading-none rounded-full hover:text-[#5F9598]" href="#">Home</a>
        <a className="text-[#F3F4F4] px-4 py-2 leading-none rounded-full hover:text-[#5F9598]" href="#about">About</a>
        <a className="text-[#F3F4F4] px-4 py-2 leading-none rounded-full hover:text-[#5F9598]" href="#contact">Contact</a>
    </div>
    </nav>
        </>
    )
}
export default Nav;