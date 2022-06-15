type CardFeedNewsProps = {
    image: string 
    title: string 
    subTitle: string 
    date: string
}

export function CardFeedNews({image, title, subTitle, date}: CardFeedNewsProps) {
    return (
        <div className="flex space-x-3 mb-3">
            <div className={`${image} w-44 h-36 bg-center bg-cover`}/>
            <div className="flex-1">
                <div className="flex flex-col justify-between">
                    <h2 className="text-xs font-normal mb-1">
                        {title}
                    </h2>
                    <p className="text-xs mb-1 opacity-60">
                        {subTitle}
                    </p>
                    <span className="text-xs opacity-30 mb-2">
                        {date}
                    </span>
                </div>
                <button className="text-xs w-20 h-6 bg-purple rounded-md font-normal hover:bg-violet-600 transition-colors">Ler notícia</button>
            </div>
        </div>
    )
}