import React from "react";
import { Container } from './styled'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    placeholder: string;
};

export const Input = ({placeholder, value, ...props}: InputProps) => {
    return(
        <Container
            value={value}    
            placeholder={placeholder}
            {...props}
        />
    );
};