import React from "react";
import { Text, TextProps } from "react-native";

const K2Text: React.FC<TextProps> = (props) => {
    const { style, children } = props;
    return (
        <Text style={style}>{children}</Text>
    )
}

export default K2Text;
