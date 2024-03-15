import { isColorLight } from "@/app/functions";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";



interface TodoItem {
    id_todo: number;
    desc_todo: string;
    data_todo: string;
    categoria: string;
    cor_categoria: string;
}

interface ListProps {
    todos: TodoItem[];
    columnMap: Record<string, string>;
}

const List: React.FC<ListProps> = ({ todos, columnMap }) => {
    return (
        <table className="w-full">
            <thead >
                <tr>
                    {Object.values(columnMap).map(
                        (label, index) => (
                            <th
                                key={index}
                                onClick={() =>

                                    Object.keys(columnMap)[
                                    index
                                    ]
                                }
                                style={{ borderBottom: '3px solid #52525B' }}
                            >
                                <div className="px-4 py-2 flex items-center text-xl font-bold text-zinc-600">
                                    {label !== 'Data' ? label : ''}
                                </div>
                            </th>
                        )
                    )}
                </tr>
            </thead>
            <tbody>
                {todos.map((row: any, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className={`border-t-2 border-zinc-500 ${rowIndex % 2 === 0 ? '' : 'bg-zinc-100 '}`

                        }
                    >

                        {
                            Object.keys(columnMap).map(
                                (column, columnIndex) => (
                                    <td
                                        key={columnIndex}
                                        title={row[column]}
                                        className="p-4 text-left text-base font-bold text-zinc-600 cursor-pointer"
                                    >

                                        {column !== 'data_todo' ?
                                            column === 'desc_todo' ?
                                                <div>
                                                    <div className="">
                                                        {row['desc_todo']}
                                                    </div>
                                                    <div className="text-left text-base font-normal text-zinc-600 cursor-pointer">
                                                        {row['data_todo']}
                                                    </div>
                                                </div>

                                                :
                                                column === 'categoria' ?
                                                    <div className="flex items-center justify-between">
                                                        <div style={{
                                                            width: "auto",
                                                            height: "auto",
                                                            padding: '4px 8px 4px 8px',
                                                            borderRadius: '6px',
                                                            backgroundColor: row['cor_categoria']
                                                        }}>
                                                            <span className={isColorLight(row['cor_categoria']) ? 'text-zinc-600 font-bold' : 'text-white font-medium'}>
                                                                {row['categoria']}
                                                            </span>
                                                        </div>
                                                        <MdKeyboardArrowRight className="mr-4" size={25} />
                                                    </div>
                                                    :
                                                    row[column]
                                            : ''
                                        }


                                    </td>
                                )
                            )
                        }
                    </tr>
                ))}



            </tbody>
        </table >
    );
}

export default List;