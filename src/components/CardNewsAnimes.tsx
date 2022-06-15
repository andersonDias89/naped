import { useRouter } from "next/router"

type CardNewsAnimeProps = {
    image: string
    infoAnime: string
}

export function CardNewsAnimes({ image, infoAnime }: CardNewsAnimeProps) {
    const router = useRouter()

    return (

        <article className={`${image} h-52 w-64 flex flex-col justify-between p-3 mb-10`}>
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
                    {infoAnime}
                </p>
            </div>
        </article>

    )
}