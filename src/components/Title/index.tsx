import React from "react";
import { Text } from './styled';
import { TitleProps } from '../../interfaces/TitleInterface';


export const Title = (props: TitleProps) => {
    return(
        <Text>{props.text}</Text>
    );
};