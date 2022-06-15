import Logo from '../assets/logo-naped.svg'

export function Footer() {
    return (
        <footer className="w-full flex items-center justify-center py-10">
            <div className="w-1/3 flex flex-col items-center justify-center space-y-2">
                <div>
                    <img src={'/assets/logo-naped.svg'} alt="Logo naped" />
                </div>
                <div>
                    <p className='text-xs text-center'>
                        Todas as imagens de filmes, séries e etc
                        são marcas registradas <br /> dos seus respectivos proprietários.
                    </p>
                </div>
            </div>

        </footer>
    )
}