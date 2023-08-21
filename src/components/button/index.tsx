import { FC, MouseEventHandler, ReactNode } from 'react';

import {
    ButtonSize,
    ButtonType,
 } from '@enums';


interface props {
    className?: string,
    children: ReactNode,
    onClick: MouseEventHandler,
    size?: ButtonSize,
    type?: ButtonType
}

const Button: FC<props> = ({
    className,
    children,
    onClick,
    size = ButtonSize.REGULAR,
    type = ButtonType.PRIMARY,
}) => {
    return (
        <button
            className={`hoz-button-primary mt-16 px-4 py-2 rounded text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer ${className}`}
            onClick={(e) => onClick(e)}>
                <div className='flex flex-row justify-center items-baseline'>
                    {children}
                </div>
        </button>
    )
}

export default Button;