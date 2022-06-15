import Link from "next/link";


export function Header() {
    return (
        <header className="w-full h-14 flex items-center mb-10">
            <div className="w-4/5 m-auto flex items-center justify-between">
                
                    <Link href={'/'}>
                        <img className="cursor-pointer" src={'/assets/logo-naped.svg'} alt="Logo naped" />
                    </Link>

                    <div className='flex space-x-8'>
                        <nav>
                            <ul className='flex space-x-5'>
                                <li className='hover:border-b-2 hover:border-purple transition-colors'><Link href={'/'}>Home</Link></li>
                                <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Séries</a></li>
                                <li className='hover:border-b-2 hover:border-purple transition-colors'><a href="#">Filmes</a></li>
                                <li className='hover:border-b-2 hover:border-purple transition-colors'><Link href={'/animes'}>Animes</Link></li>
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