import React from "react";
import { Container } from './styled'
import { InputProps } from '../../interfaces/InputInterface';


export const Input = ({placeholder, value, ...props}: InputProps) => {
    return(
        <Container
            value={value}    
            placeholder={placeholder}
            {...props}
        />
    );
};