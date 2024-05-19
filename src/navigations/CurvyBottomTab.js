import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { Animated } from 'react-native';
import PayScreen from '../screens/PayScreen';
import HomeScreen from '../screens/HomeScreen';
import Recieve from '../screens/Recieve';


const CurveBottomTab = ({ route }) => {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';

        switch (routeName) {
            case 'Home':
                icon = require('../assets/images/Home.png');
                break;
            case 'Pay':
                icon = require('../assets/images/Qrcode.png');
                break;
            case 'Receive':
                icon = require('../assets/images/Receive.png');
                break;
        }

        return (
            <Image source={icon} style={{ height: 40, width: 40,resizeMode:"contain", tintColor: routeName === selectedTab ? "#fff" : '#5E97FF' }} />
            // <MaterialCommunityIcons name={icon} size={25} color={routeName === selectedTab ? "#123" : 'gray'} />
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <CurvedBottomBarExpo.Navigator
                type="UP"
                style={styles.bottomBar}
                shadowStyle={styles.shawdow}
                height={60}
                circleWidth={50}
                initialRouteName='Home'
                screenOptions={{ headerShown: false }}
                bgColor="#0358F1"
                borderTopLeftRight
                renderCircle={({ routeName, selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate(routeName)}

                        >
                            {selectedTab === routeName ?
                                (
                                    <Image source={require('../assets/images/Qrcode.png')} style={{ width: 35, height: 35, tintColor: '#000' }} />
                                ) : (
                                    <Image source={require('../assets/images/Qrcode.png')} style={{ width: 35, height: 35, tintColor: "#000" }} />
                                )
                            }
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBarExpo.Screen
                    name="Home"
                    component={() => <HomeScreen />}
                    position="LEFT"
                />
                <CurvedBottomBarExpo.Screen
                    name="Pay"
                    component={() => <PayScreen />}
                    position="CIRCLE"
                />
                <CurvedBottomBarExpo.Screen
                    name="Receive"
                    position="RIGHT"
                    component={() => <Recieve />}
                />
            </CurvedBottomBarExpo.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomBar: {

    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        bottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: '#5E97FF',
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: 'red'
    },
    img: {
        width: 30,
        height: 30,
    }
})

export default CurveBottomTab;
