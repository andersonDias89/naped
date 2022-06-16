type CardFeedNewsAsideProps = {
    imageAside: string
    info: string
}

export function CardFeedNewsAside({ imageAside, info }: CardFeedNewsAsideProps) {
    return (
        <div className={`${imageAside} h-60 sm:h-72 flex flex-col justify-between p-3`}>
            <div>
                <button className='bg-purple px-2 py-1 text-sm rounded-md hover:bg-violet-600 transition-colors'>Visualizar</button>
            </div>

            <div>
                <p className='text-sm'>
                    {info}      
                </p>
            </div>
        </div>
    )
}