import React from "react";
import { Text } from './styled';

interface TitleProps {
    text: string,
};

export const Title = (props: TitleProps) => {
    return(
        <Text>{props.text}</Text>
    );
};