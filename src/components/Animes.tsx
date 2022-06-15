import { CardFeedNews } from './CardFeedNews'
import { CardNewsAnimes } from './CardNewsAnimes'
import { InputSeach } from './InputSeach'

export function Animes() {
    return (
        <div className="w-full">
            <div className="w-4/5 m-auto">
                <header className="w-full animesBg h-56 flex items-center">
                    <div className="ml-8 space-y-1">
                        <h1 className="text-2xl font-bold">Animes</h1>
                        <p className="text-xs">
                            O Naped pode ser sua fonte de informações sobre <br /> o
                            mundo nerd e outros assuntos relacionados.
                        </p>
                    </div>
                </header>

                <InputSeach />

                <div className='flex flex-wrap justify-between'>
                    {newsAnimes.map(post => {
                        return (
                            <CardNewsAnimes
                                image={post.image}
                                infoAnime={post.infoAnime}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const newsAnimes = [
    {
        image: 'anime-img1',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img2',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'img17',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img1',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img2',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'img17',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img1',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img2',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'img17',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img1',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'anime-img2',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },

    {
        image: 'img17',
        infoAnime: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },


]