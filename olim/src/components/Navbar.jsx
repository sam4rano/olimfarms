

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-4 bg-red-400 h-[60px]'>
        <div >
            <h1 className="text-white font-bold text-lg">OlimFarms</h1>
        </div>
        <div className="flex flex-row justify-between gap-2 text-lg"> 
            <h1 className="text-white ">About</h1>
            <h1 className="text-white">Portfolio</h1>
            <h1 className="text-white">Project</h1>
            <h1 className="text-white">Contact</h1>
        </div>
    </div>
  )
}

export default Navbar