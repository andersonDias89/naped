import { useRouter } from "next/router"

type CardFeedNewsProps = {
    image: string
    title: string
    subTitle: string
    date: string
}

export function CardFeedNews({ image, title, subTitle, date }: CardFeedNewsProps) {
    const router = useRouter()

    return (
        <div className="flex xs:flex-col xs:space-x-0 xs: space-x-3 xs:mb-5 mb-3">
            <div className={`${image} w-44 h-36 xs:mb-2 xs:w-full xs:h-48 bg-center bg-cover`} />
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
                <button
                    onClick={() => router.push('/noticias')}
                    type="button"
                    className="text-xs w-20 h-6 bg-purple rounded-md font-normal hover:bg-violet-600 transition-colors"
                >
                    Ler notícia
                </button>
            </div>
        </div>
    )
}