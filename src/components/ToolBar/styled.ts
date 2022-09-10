import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: #6cad89;
    border-radius: 3px;
    cursor: pointer;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    :hover {
        opacity: 90%
    }
`;

export const Text = styled.h1`
    font-size: 15px;
    color: #fff;
    font-family: 'Roboto';
    text-align: center;
    line-height: 40px;
`;