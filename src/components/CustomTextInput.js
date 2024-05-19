import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import React from 'react';

export default function CustomTextInput(props) {
    const { width, height } = Dimensions.get('window');
    const { placeholder, title, keyboardType, color, marginTop, borderRadius, disabled, fontWeight, marginBottom } = props;


    return (
        <View style={{ borderRadius: 10, borderWidth: 1, borderColor: "#E7E7E7", height: 56, justifyContent: "center", padding: 10, marginBottom: 20, marginTop: 30, width: width - 40 }}>
            <TextInput style={{ fontSize: 18,paddingLeft:10 }} placeholder={placeholder} keyboardType={keyboardType?keyboardType:"default"} maxLength={10} />
        </View>
    );
}

const styles = StyleSheet.create({});