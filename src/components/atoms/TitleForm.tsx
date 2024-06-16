import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> { }

export function TitleForm({ children, ...props }: Props) {
    return (
        <h1
            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            {...props}
        >
            {children}
        </h1>
    )
}

export default TitleForm;

