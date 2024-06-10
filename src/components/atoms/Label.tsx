import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export function Label({ children, ...props }: Props) {
    return (
        <label
            className="block text-xs font-bold leading-3 text-gray-600"
            {...props}
        >
            {children}
        </label>
    )
}

export default Label;