'use client'
import ButtonOne from "@/component/ButtonOne";
import Input from "@/component/Input";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import List from "@/component/List";
import ListCategory from "@/component/ListCategory";



export default function Home() {
    const json = [{
        desc_categoria: 'Pendente',
        cor_categoria: { descricao: 'Fazendo', cor: '#f3ff4a' }
    },
    {
        desc_categoria: 'Fazendo',
        cor_categoria: { descricao: 'Fazendo', cor: '#000152' }
    }]

    const mapping = {
        desc_categoria: 'Categoria',
        cor_categoria: 'Cor',
    }


    return (
        <div className="h-full bg-stone-200"> {/* Fundo */}
            <div> {/* Menu */}

                <div className="mx-auto bg-zinc-800 flex justify-center"> {/* Fundo Menu */}
                    <div className="w-4/5 flex justify-between items-center py-6"> {/* Div Menu */}

                        <div className="w-full flex items-center text-white justify-between"> {/* Itens */}

                            <div className="flex"> {/* Grupo Itens Esquerda */}
                                <a href="/" className="flex items-center font-semibold text-xl tracking-tight">
                                    <FaHome size={20} className="mr-2" />
                                    Home
                                </a>

                                <a href="/categoria" className="flex items-center font-semibold ml-10 text-xl tracking-tight">
                                    <BiCategoryAlt size={20} className="mr-2" />
                                    Categoria
                                </a>

                                <a href="/perfil" className="flex items-center font-semibold ml-10 text-xl tracking-tight">
                                    <IoMdContact size={20} className="mr-2" />
                                    Perfil
                                </a>
                            </div> {/* Grupo Itens Esquerda */}

                            <a href="/logout" className="flex items-center font-semibold ml-10 text-xl tracking-tight">
                                <TbLogout size={20} className="mr-2" />
                                Logout
                            </a>

                        </div> {/* Itens */}

                    </div> {/* Div Menu */}
                </div> {/* Fundo Menu */}

            </div> {/* Menu */}

            <div className="h-auto pb-8 pt-20 flex justify-center">

                <div className="w-4/5 flex flex-wrap justify-between">

                    <h1 className="font-medium text-3xl text-zinc-600 ">To-Do List</h1>

                    <ButtonOne
                        text="Criar"
                        className=" px-8 py-2"
                        onClick={() => { alert('Buscar') }}
                        icone={<FaPlus />}
                    />

                </div>

            </div>

            <div className="h-auto mt-4 flex justify-center"> {/* Main */}
                <div className="w-4/5 p-4 h-auto flex flex-wrap justify-between">
                    <ListCategory
                        todos={json}
                        columnMap={mapping}
                    />
                </div>
            </div>

        </div>
    );
}
