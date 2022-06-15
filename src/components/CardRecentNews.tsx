type CardRecentNewsProps = {
    image: string
    info: string
}

export function CardRecentNews({ image, info }: CardRecentNewsProps) {
    return (
        <div className={`${image} h-52 w-64 flex flex-col justify-between p-3`}>
            <div>
                <button className='bg-purple px-2 py-1 text-sm rounded-md hover:bg-violet-600 transition-colors'>Ver notícia</button>
            </div>

            <div>
                <p className='text-sm'>
                    {info}
                </p>
            </div>
        </div>
    )
}