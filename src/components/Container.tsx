import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className="" }: ContainerProps ) => {
    return (
        <div className={`
            max-w-[1124px] mx-auto ${className}
            max-[1280px]:max-w-[90%]
        `}>
            { children }
        </div>
    );
}

export default Container;