import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

const Button = (config) => (
    <TouchableOpacity {...config}>
        <Text>{config.text}</Text>
    </TouchableOpacity>
)

export default Button;
