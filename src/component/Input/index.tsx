import React from "react";

interface HomeProps {
    placeholder?: any;
    className?: string;
    onChange?: (row: any) => void;
    inputIcone?: JSX.Element;
}

const Input: React.FC<HomeProps> = ({ className, inputIcone, placeholder, onChange }) => {

    return (
        <>
            <input
                className={`${className} bg-white rounded-md outline-none border-2 text-stone-600 border-zinc-600 hover:bg-stone-100`}
                placeholder={placeholder}
                onChange={onChange} />


        </>
    );
}

export default Input;