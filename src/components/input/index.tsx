import { ChangeEvent, SetStateAction, forwardRef, useState } from 'react';

import { InputType } from '@enums';

interface props {
    id: string,
    name: string,
    className?: string,
    label?: string,
    notValidMsg?: string,
    onChange?: Function,
    placeholder?: string,
    type?: InputType,
}


const Input = forwardRef<HTMLDivElement, props>(({
    id,
    name,
    className,
    label,
    notValidMsg = 'Not valid value',
    onChange,
    placeholder = '',
    type = InputType.TEXT,
}, showNotValidMsgRef) => {
    const [val, setVal] = useState('');

    const onChangeValue = (e: { target: { value: SetStateAction<string>; }; }) => {
        setVal(e.target.value);
        onChange?.(e.target.value);
    }

    return (
        <div className={`hoz-input ${className} relative mt-10`}>
            <input
                id={id}
                name={name}
                type={type}
                value={val}
                className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-hozon`}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e)}
                placeholder={placeholder} />
            {label && (
                <label
                    htmlFor={name}
                    className="absolute left-0 -top-3.5 text-neutral-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-hozon peer-focus:text-sm">
                        {label}
                </label>
            )}
            <div
                className="hoz-input-not-valid-msg"
                ref={showNotValidMsgRef}
                hidden={true}>
                    {notValidMsg}
            </div>
        </div>
    )
})

export default Input;