import { BiSearchAlt } from "react-icons/bi";

export function InputSeach() {
    return (
        <div className="bg-gray mb-14 h-10 w-full m-auto rounded-sm mt-6 flex items-center text-sm px-2 justify-between">
            <input
                className="bg-transparent outline-none w-11/12 "
                type="text"
                placeholder="Quer ajuda na procura? Pesquise aqui"
            />
            <button className='text-xl text-slate-400 hover:text-purple'>
                <BiSearchAlt />
            </button>
        </div>
    )
}