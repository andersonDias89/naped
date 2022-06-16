import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'



export function Header({ }) {
    const [isVisible, setIsVisible] = useState(false)

    function handleToggle() {
        if (isVisible === false) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    return (
        <>
            <header className="w-full h-14 flex items-center mb-10">

                <div className="w-4/5 md:w-11/12 m-auto flex items-center justify-between">

                    <Link href={'/'}>
                        <img className="cursor-pointer" src={'/assets/logo-naped.svg'} alt="Logo naped" />
                    </Link>

                    <div className='flex space-x-8'>
                        <nav className="md:hidden">
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
                        <button
                            className="text-xl"
                            onClick={handleToggle}
                            type="button">
                            <div className="cell:hidden">
                            <HiMenuAlt3 />
                            </div>
                        </button>
                    </div>

                </div>

                {isVisible === true &&
                    <nav className="bg-gray z-50 h-screen top-0 right-0 w-2/3 fixed shadowToggle">
                        <div className="w-full flex justify-end p-4">
                            <button
                                className="text-2xl"
                                onClick={handleToggle}
                                type="button">
                                <AiOutlineCloseCircle />
                            </button>
                        </div>
                        <ul className='flex space-y-9 mt-10 flex-col items-center justify-center text-2xl'>
                            <li className='transition-colors'><Link href={'/'}>Home</Link></li>
                            <li className='transition-colors'><a href="#">Séries</a></li>
                            <li className='transition-colors'><a href="#">Filmes</a></li>
                            <li className='transition-colors'><Link href={'/animes'}>Animes</Link></li>
                            <li className='transition-colors'><a href="#">Games</a></li>
                        </ul>
                    </nav>
                }
            </header>
        </>
    )
}