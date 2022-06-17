import { useRouter } from "next/router"

export function PageNotFound() {
    const router = useRouter()

    return (
        <div className="w-full h-screen flex items-center ">
            <div className="w-4/5 m-auto flex items-center lg:flex-col lg:w-11/12 lg:space-y-8">
                <div className="w-1/2 lg:w-full flex items-center justify-center">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            Tenho más notícias <br />
                            para você!
                        </h1>
                        <p>
                            A página que você está procurando pode ter sido <br />
                            removida ou está temporariamente indisponível.
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            type="button"
                            className="px-4 text-xs py-2 font-bold hover:bg-violet-600 bg-purple rounded-md mt-4">
                            Voltar para home
                        </button>
                    </div>
                </div>

                <div className="w-1/2 lg:w-full flex items-center justify-center">
                    <img className="lg:w-60" src={'/assets/img-404.png'} alt="Ilustração do erro 404" />
                </div>
            </div>
        </div>
    )
}