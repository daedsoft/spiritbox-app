import spiritboxLogo from '../assets/images/spiritbox-logo.webp'

const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 flex justify-between items-center bg-sky-900 w-full p-2 shadow-sm'>
        <div>
            <img src={spiritboxLogo} alt="Spiritbox" />
        </div>

        <div>        
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" className="block w-full p-2 pl-10 text-white border border-none focus:outline-none bg-sky-950" placeholder="Busca una canción"/>        
            </div>
        </div>
    </nav>
  )
}

export default NavBar