import React from 'react';
import { ButtonProps } from '../../interfaces/ButtonInterface';
import { Container, Text } from './styled';

export const Button = (props: ButtonProps) => {
    return(
        <Container
            {...props}
        >
            <Text>Gerar QRCode</Text>
        </Container>
    );
};