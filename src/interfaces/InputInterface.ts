import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    placeholder: string;
}