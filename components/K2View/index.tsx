import React from "react";
import { View, ViewProps } from "react-native";

export interface K2ViewProps extends ViewProps {}

const K2View: React.FC<K2ViewProps> = (props) => {
    const { style } = props;
    return (
        <View style={style}></View>
    )
}

export default K2View;
