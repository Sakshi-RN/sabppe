import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';


const { width } = Dimensions.get('window');

const DATA = [
    { ID: '#1', image: 'https://s3-alpha-sig.figma.com/img/f528/3e60/e40125142aba9235ea6a8d953a53047b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mCc6aDlVVRjHl6UopUmlv3zXtQSgBX4VEI4GsN~K8cl~CLUs4pDTLAGRJKWllfaW6jQ~GK04Y48ah5xIzQ5DPfzWMBQ3rOf768Nzb24lL~SGh8tI1Sc4WjaDVRxJCV3tVKRGXpwQoLw-3HhI3YCUe0MwwDXzgHAf~fg9whbt7MOQEmwH6OPQc1KE7gBk8kYmU3STXAHCAP6dNpkTK3C3WOsdW8bK2wAevB-XHvpeB-3-q59yl0-ou7AYWA7NH2iCZRmAhKMBWvXoBHnkw01zNFlAb5aaBcMyWwK4-FwXJ1RppX1Z2p2j6~NUvq1V6zduIkqHgnXGu4-aNiI6ti9pCw__' },
    { ID: '#2', image: 'https://s3-alpha-sig.figma.com/img/f528/3e60/e40125142aba9235ea6a8d953a53047b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mCc6aDlVVRjHl6UopUmlv3zXtQSgBX4VEI4GsN~K8cl~CLUs4pDTLAGRJKWllfaW6jQ~GK04Y48ah5xIzQ5DPfzWMBQ3rOf768Nzb24lL~SGh8tI1Sc4WjaDVRxJCV3tVKRGXpwQoLw-3HhI3YCUe0MwwDXzgHAf~fg9whbt7MOQEmwH6OPQc1KE7gBk8kYmU3STXAHCAP6dNpkTK3C3WOsdW8bK2wAevB-XHvpeB-3-q59yl0-ou7AYWA7NH2iCZRmAhKMBWvXoBHnkw01zNFlAb5aaBcMyWwK4-FwXJ1RppX1Z2p2j6~NUvq1V6zduIkqHgnXGu4-aNiI6ti9pCw__' },
    { ID: '#3', image: 'https://s3-alpha-sig.figma.com/img/f528/3e60/e40125142aba9235ea6a8d953a53047b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mCc6aDlVVRjHl6UopUmlv3zXtQSgBX4VEI4GsN~K8cl~CLUs4pDTLAGRJKWllfaW6jQ~GK04Y48ah5xIzQ5DPfzWMBQ3rOf768Nzb24lL~SGh8tI1Sc4WjaDVRxJCV3tVKRGXpwQoLw-3HhI3YCUe0MwwDXzgHAf~fg9whbt7MOQEmwH6OPQc1KE7gBk8kYmU3STXAHCAP6dNpkTK3C3WOsdW8bK2wAevB-XHvpeB-3-q59yl0-ou7AYWA7NH2iCZRmAhKMBWvXoBHnkw01zNFlAb5aaBcMyWwK4-FwXJ1RppX1Z2p2j6~NUvq1V6zduIkqHgnXGu4-aNiI6ti9pCw__' },
];

const HomeCarousal = () => {

    const renderItem = data => (
        <View
            key={data.ID}
            style={styles.cardContainer}
        >
            <View
                style={styles.cardWrapper}
            >
                <Image
                    style={styles.card}
                    source={{ uri: data.image }}
                />
            </View>
        </View>
    );
    return (
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center',marginTop:15 }}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={DATA}
                loop
                autoplay
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        width: width * 0.9,
        height: width * 0.4,
    },
})

export default HomeCarousal;
