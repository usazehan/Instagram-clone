import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {human, systemWeights} from 'react-native-typography';

const Styles = StyleSheet.create({
    root: {
        paddingHorizontal: 16,
        minHeight: 50,
    },
    wrapper: {
        flex: 1,
    },
    text: {
        ...human.footnoteObject,
        ...systemWeights.light,
    }
});

export default function Meta({
    caption,
    username= 'Zehan',
}) {
    return (
        <View style={Styles.root}>
            <View style={Styles.wrapper}>
                <Text style={Styles.text}>
                    Liked by <Text style={systemWeights.regular}>Jon Snow</Text> and{' '}
                    <Text style={systemWeights.regular}>1,260 others</Text>
                </Text>   
            </View>
            <View style={Styles.wrapper}>
                <Text numberOfLines={2} style={Styles.text}>
                    <Text style={systemWeights.regular}>{username}</Text> {caption}
                </Text>
            </View>
        </View>
    )
}