import { CardFeedNews } from "./CardFeedNews"
import { CardFeedNewsAside } from "./CardFeedNewsAside"


export function FeedNews() {
    return (
        <section className="w-full mt-5">
            <div className="w-4/5 lg:w-11/12 m-auto flex sm:flex-col">
                <div className=" w-2/3 sm:w-full sm:mb-4 sizeLarge overflow-y-auto py-4 pr-3 ">
                    {feedNews.map(post => {
                        return (
                            <CardFeedNews
                                image={post.image}
                                title={post.title}
                                subTitle={post.subTitle}
                                date={post.date}
                            />
                        )
                    })}
                </div>

                <div className="flex-1 pl-3 sm:pl-0">
                    <div className="w-4/5 border-b-4 border-purple mb-3 pb-2">
                        <h2 className="text-xl">Lorem ipsum dolor</h2>
                    </div>
                    <div className=" space-y-3">
                        {feedNewsAside.map(postAside => {
                            return (
                                <CardFeedNewsAside
                                    imageAside={postAside.image}
                                    info={postAside.info}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}



const feedNews = [
    {
        image: 'img4',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae nesciunt',
        subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi',
        date: '22/05/2021'
    },

    {
        image: 'img5',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae nesciunt',
        subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi',
        date: '22/05/2021'
    },

    {
        image: 'img6',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae nesciunt',
        subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi',
        date: '22/05/2021'
    },

    {
        image: 'img7',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae nesciunt',
        subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi',
        date: '22/05/2021'
    },

    {
        image: 'img8',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae nesciunt',
        subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi',
        date: '22/05/2021'
    },

]

const feedNewsAside = [
    {
        image: 'img10',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi'
    },

    {
        image: 'img9',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi'
    },

    {
        image: 'img11',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolor, distinctio dicta molestiae consequuntur excepturi'
    },

]