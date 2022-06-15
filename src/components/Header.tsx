

export function Header() {
    return (
        <header className="w-full h-14 flex items-center">
            <div className="w-4/5 m-auto flex items-center justify-between ">
                <a href="#">
                    <img src={'/assets/logo-naped.svg'} alt="Logo naped" />
                </a>

                <div className='flex space-x-8'>
                    <nav>
                        <ul className='flex space-x-5'>
                            <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Home</a></li>
                            <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Séries</a></li>
                            <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Filmes</a></li>
                            <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Animes</a></li>
                            <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Games</a></li>
                        </ul>
                    </nav>

                    <div>
                        <button className='text-xs border transition-colors border-purple rounded-xl px-3 py-1 hover:bg-purple hover:text-white'>Minha conta</button>
                    </div>
                </div>
            </div>
        </header>
    )
}