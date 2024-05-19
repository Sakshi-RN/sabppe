import { TouchableOpacity, Text,Dimensions } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const CustomButton = (props) => {
    const { width, height } = Dimensions.get('window');

    const { onPress, title, backgroundColor, color,marginTop ,borderRadius,disabled,fontWeight,marginBottom} = props;

    return (
        // <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#07B5F9", width: width-40, height: 56, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop:marginTop?marginTop:10}}>
                 <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#07B5F9", padding:10, borderRadius: 5, alignItems: "center", justifyContent: "center",width:"90%"}}>

            <Text style={{ fontSize:responsiveFontSize(2), fontWeight: '700', color: '#fff' }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;