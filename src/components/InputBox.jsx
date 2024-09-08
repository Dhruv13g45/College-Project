import React from 'react'

const InputBox = ({ inputName, inputType, inputId, inputValue, readOnly }) => {

    let capWord = inputName;
    capWord = capWord[0].toUpperCase() + capWord.substring(1);

    return (
        <div className='flex items-center gap-3 justify-evenly w-full'>
            <label htmlFor={inputName} className='font-bold text-[#0b0b51]'>{capWord}:</label>
            <input type={inputType} name={inputName} id={inputId} readOnly={readOnly} value={inputValue} className='border border-black ' />
        </div>
    )
}

export default InputBox
