import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import AppIntroSlider from 'react-native-app-intro-slider';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function LandingPage() {
    const navigation = useNavigation();
    const sliderRef = useRef(null);

    const { width, height } = Dimensions.get('window');
    const sliderData = [
        {
            id: 1,
            header: "Pay Your Way",
            description: "India’s 1st mobile credit card with UPI payment. pay by QR, pay online, pay by mastercard",
            // icon: Images.slide1,
        },
        {
            id: 2,
            header: "Pay Your Way",
            description: "India’s 1st mobile credit card with UPI payment. pay by QR, pay online, pay by mastercard",
            // icon: Images.slide2,
        },
        {
            id: 3,
            header: "Pay Your Way",
            description: "India’s 1st mobile credit card with UPI payment. pay by QR, pay online, pay by mastercard",
            // icon: Images.slide2,
        },
    ];
    const renderItem = ({ item }, sliderRef, navigation) => {
        const goToNextSlide = () => {
            const currentIndex = sliderData.findIndex(slide => slide.id === item.id);
            const isLastSlide = currentIndex === sliderData.length - 1;

            if (isLastSlide) {
                navigation.navigate('Login');
            } else if (sliderRef.current) {
                sliderRef.current.goToSlide(currentIndex + 1);
            }
        };

        return (
            <>

            </>




        );
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b9ebff' }}>
            <Image source={require('../assets/images/logo.png')} style={{
                width: responsiveWidth
                    (50), height: responsiveHeight(8), marginTop: responsiveHeight(3), alignSelf: 'center'
            }} />
            <Image resizeMode='contain' source={require('../assets/images/SplashFrame.png')} style={{ height: height * 0.420, width: 280, marginTop: responsiveHeight(8), alignSelf: 'center' }} />
            <View style={{ backgroundColor: '#ffff', alignItems: 'center', paddingVertical: responsiveHeight(3) }}>
                <Text style={{ fontWeight: "600", fontSize: responsiveFontSize(2.8) }}>Pay Your Way</Text>
                <Text style={{ color: '#585858', textAlign: "center", fontSize: responsiveFontSize(1.9), width: responsiveWidth(70), lineHeight: responsiveHeight(3), marginTop: responsiveHeight(3) }}>India’s 1st mobile credit card with UPI payment. pay by QR, pay online, pay by mastercard</Text>
                <View style={{
                    height: responsiveHeight(5), backgroundColor: 'red', alignSelf: 'center', marginTop: responsiveHeight(4)
                }}>
                    <AppIntroSlider
                        renderItem={(item) => renderItem(item, sliderRef, navigation)}
                        data={sliderData}
                        activeDotStyle={{ backgroundColor: "#0E0E0E", width: 20 }}
                        dotStyle={{ backgroundColor: "#E5E1EF" }}
                        dotClickEnabled={true}
                        showDoneButton={false}
                        showNextButton={false}
                        bottomButton={true}
                        ref={sliderRef}
                    />
                </View>
                <CustomButton
                    onPress={() => {
                        goToNextSlide();
                    }}
                    title={"Get Started"}
                />
            </View>
        </SafeAreaView>
    );
}