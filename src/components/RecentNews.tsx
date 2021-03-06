import { CardRecentNews } from "./CardRecentNews";

export function RecentNews() {
    return (
        <section className="w-full mt-10">
            <div className="w-4/5 lg:w-11/12 m-auto">
                <div className="w-1/4 sm:w-full md:w-4/5">
                    <h2 className="text-xl border-b-4 border-purple pb-2 mb-4">Notícias mais recentes</h2>
                </div>

                <div className="flex flex-wrap justify-between md:justify-center gap-y-6 mt-4">
                    {recentNews.map((postRecent, index) => {
                        return (
                            <CardRecentNews
                            key={index}
                            image={postRecent.image}
                            info={postRecent.info}
                            />
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}

const recentNews = [
    {
        image: 'img12',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam nisi id, sit sint.'
    },

    {
        image: 'img13',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam nisi id, sit sint.'
    },

    {
        image: 'img14',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam nisi id, sit sint.'
    },

    {
        image: 'img15',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam nisi id, sit sint.'
    },

    {
        image: 'img16',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam nisi id, sit sint.'
    },

    {
        image: 'img17',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam nisi id, sit sint.'
    },

]