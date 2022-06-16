import { useRouter } from "next/router"

type CardRecentNewsProps = {
    image: string
    info: string
}

export function CardRecentNews({ image, info }: CardRecentNewsProps) {
    const router = useRouter()

    return (
        <div className={`${image} h-52 w-80 sm:h-96 sm:w-full xl:justify-between justify-around flex flex-col p-3`}>
            <div>
                <button
                    onClick={() => router.push('/noticias')}
                    type="button"
                    className="bg-purple px-2 py-1 text-xs rounded-md hover:bg-violet-600 transition-colors"
                >
                    Ver notícia
                </button>
            </div>

            <div>
                <p className='text-sm'>
                    {info}
                </p>
            </div>
        </div>
    )
}