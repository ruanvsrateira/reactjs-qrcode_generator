import React from 'react';
import { Container, Text } from './styled';

interface ButtonProps {
    onClick: () => void   
};

export const Button = (props: ButtonProps) => {
    return(
        <Container
            {...props}
        >
            <Text>Gerar QRCode</Text>
        </Container>
    );
};