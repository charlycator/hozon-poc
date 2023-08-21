import { ComponentType, FC, } from 'react';
import dynamic from 'next/dynamic';

import {
    IconAppearance,
    IconName,
    IconSize,
 } from '@enums';


type AllIconProps = {
    className?: string,
    name: IconName,
    appearance?: IconAppearance,
    size?: IconSize 
}

type SingleIconProps = Omit<AllIconProps, 'name'>;


const Icon: FC<AllIconProps> = ({
    className,
    name,
    appearance = IconAppearance.SOLID,
    size = IconSize.REGULAR,
}) => {
    const getIcon = () => {
        const DynamicComponent: ComponentType<SingleIconProps> = (dynamic(() => import(`./${name}`), {
            ssr: false,
        }));

        return <DynamicComponent appearance={appearance} size={size} />
    }

    return (
        <div className={`hoz-icon-${name} ${className}`}>
            {getIcon()}
        </div> 
    )
}

export default Icon;