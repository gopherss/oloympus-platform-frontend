import React from 'react';

interface Props extends React.HTMLAttributes<HTMLSpanElement> { }

export function Span({ children, ...props }: Props) {
    return (
        <span
            className="block text-sm text-red-600"
            {...props}
        >
            {children}
        </span>
    )
}

export default Span;