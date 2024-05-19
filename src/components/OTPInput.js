import React, { useRef, useState, useEffect } from "react";
import { View, Pressable, Text, TextInput, StyleSheet, Keyboard } from "react-native";


const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef(null);
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current?.focus();
    };

    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    useEffect(() => {
        setIsPinReady(code.length === maximumLength);
        if (code.length === maximumLength) {
            Keyboard.dismiss();
        }
        return () => {
            setIsPinReady(false);
        };
    }, [code, setIsPinReady]);

    const boxDigit = (_, index) => {
        const digit = code[index] || "";

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        return (
            <View
                style={[
                    styles.splitBoxes,
                    isInputBoxFocused && isValueFocused && styles.splitBoxesFocused,
                ]}
                key={index}
            >
                <Text style={styles.splitBoxText}>{digit}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleOnPress} style={styles.splitBoxesContainer}>
                {boxArray.map(boxDigit)}
            </Pressable>
            <TextInput
                keyboardType="numeric"
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
                style={styles.hiddenInput}
            />
        </View>
    );
};

export default OTPInput;

const styles = StyleSheet.create({
    container: {
        marginBottom:20,
    },
    splitBoxesContainer: {
        flexDirection: "row", 
        width: '100%', 
      justifyContent: "space-evenly",
    },
    splitBoxes: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        marginHorizontal: 2,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 4,
        borderRadius:10,
        borderColor: "gray",

    },
    splitBoxText: {
        fontSize: 28,
        textAlign: "center",
        color:"#000",
        fontWeight:"500"
    },
    splitBoxesFocused: {
        transform: [{ scale: 1.08 }],
        backgroundColor: "#fff",
        borderColor:"#04B5F9",
        borderWidth: 2,

    },
    hiddenInput: {
        position: "absolute",
        opacity: 0,
    },
});
