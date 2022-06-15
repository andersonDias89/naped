export function InitialPage() {
    return (
        <section className="w-full flex-col">
            <div className="w-4/5 m-auto mt-10">
                <div className="w-2/5 space-y-2">
                    <h1 className="flex flex-col text-4xl">
                        <span>Mundo Nerd?</span>
                        <span>Naped!</span>
                    </h1>

                    <div>
                        <p>
                            O Naped pode ser sua fonte de informações sobre
                            o mundo nerd e outros assuntos relacionados.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-1 mt-5'>
                    <div className='img1 col-span-2 h-80 p-3 flex flex-col justify-between'>
                        <div>
                            <button className='bg-purple px-2 py-1 text-sm rounded-md hover:bg-violet-600 transition-colors'>Visualizar</button>
                        </div>

                        <div>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus
                                sint maiores sequi sapiente! A reprehenderit
                                veritatis ratione optio? Optio numquam quidem sed!
                                Officia impedit necessitatibus numquam sit? Nulla, animi illo.
                            </p>
                        </div>
                    </div>
                    <div className='gap-1 grid grid-rows-2'>
                        <div className='img2 p-3 flex flex-col justify-between'>
                            <div>
                                <button className='bg-purple px-2 py-1 text-xs rounded-md hover:bg-violet-600 transition-colors '>Visualizar</button>
                            </div>

                            <div>
                                <p className='text-xs'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus
                                    sint maiores sequi sapiente! A reprehenderit
                                </p>
                            </div>
                        </div>
                        <div className='img3 p-3 flex flex-col justify-between'>
                            <div>
                                <button className='bg-purple px-2 py-1 text-xs rounded-md hover:bg-violet-600 transition-colors '>Visualizar</button>
                            </div>

                            <div>
                                <p className='text-xs'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus
                                    sint maiores 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}