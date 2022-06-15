export function PageNotFound() {
    return (
        <div className="w-full">
            <div className="w-4/5 m-auto flex items-center">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold mb-2">
                        Tenho más notícias <br />
                        para você!
                    </h1>
                    <p>
                        A página que você está procurando pode ter sido <br />
                        removida ou está temporariamente indisponível.
                    </p>
                    <button>Voltar para home</button>
                </div>

                <div className="w-1/2"></div>
            </div>
        </div>
    )
}