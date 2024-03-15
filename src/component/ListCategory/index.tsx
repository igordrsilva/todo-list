import { isColorLight } from "@/app/functions";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ListCategoryProps {
    todos: any;
    columnMap: Record<string, string>;
}

const ListCategory: React.FC<ListCategoryProps> = ({ todos, columnMap }) => {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    {Object.values(columnMap).map(
                        (label, index) => (
                            <th
                                key={index}
                                onClick={() => Object.keys(columnMap)[index]}
                                style={{ borderBottom: '3px solid #52525B' }}
                            >
                                <div className="px-4 py-2 flex items-center text-xl font-bold text-zinc-600">
                                    {label}
                                </div>
                            </th>
                        )
                    )}
                </tr>
            </thead>
            <tbody>
                {todos.map((row: any, rowIndex: any) => (
                    <tr
                        key={rowIndex}
                        className={`border-t-2 border-zinc-500 ${rowIndex % 2 === 0 ? "" : "bg-zinc-100 "
                            }`}
                    >
                        {Object.keys(columnMap).map((column, columnIndex) => (
                            <td
                                key={columnIndex}
                                title={row[column]}
                                className="p-4 text-left text-base font-medium text-zinc-600 cursor-pointer"
                            >
                                {column === "cor_categoria" ? (


                                    <div className="flex items-center justify-between">
                                        <div style={{
                                            width: "auto",
                                            height: "auto",
                                            padding: '4px 8px 4px 8px',
                                            borderRadius: '6px',
                                            backgroundColor: row[column].cor
                                        }}>
                                            <span className={isColorLight(row[column].cor) ? 'text-zinc-600 font-bold' : 'text-white font-medium'}>
                                                {row[column].descricao}
                                            </span>
                                        </div>
                                        <MdKeyboardArrowRight className="mr-4" size={25} />
                                    </div>
                                ) : row[column] && row[column].length > 30 ? (
                                    row[column].substring(0, 30) + "..."
                                ) : (
                                    row[column]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListCategory;
