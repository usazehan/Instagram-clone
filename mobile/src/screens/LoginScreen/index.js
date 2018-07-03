import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import { iOSColors, human, systemWeights } from 'react-native-typography';
import { fonts} from '../../utils/themes';
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '@appandflow/touchable';

const COLORS_GRADIENTS = ['#743980', '#56499E'];
const styles = StyleSheet.create({
    root: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 0.3,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        alignSelf: 'stretch',
    },
    appName: {
        color: iOSColors.white,
        fontSize: 50,
        fontFamily: fonts.lobster,
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    inputWrapper: {
        height: 45,
        width: '90%',
        borderRadius: 5,
        borderColor: '#E4E4E4',
        backgroundColor: '#FAF9F9',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    input: {
        flex: 1,
    },
    loginBtn: {
        height: 45,
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#318DEE70',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtnText: {
        color: iOSColors.white,
    },
    forgotWrapper: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    BtnText: {
        ...human.footnoteObject,
        ...systemWeights.semibold,
        color: '#318DEE',
    },
    callout: {
        ...human.footnoteObject,
        ...systemWeights.semibold,
        color: iOSColors.midGray,
    }
});

class LoginScreen extends Component {
    state = {};
    render() {
        return (
            <View style={styles.root}>
                <StatusBar barStyle="light-content"/>
                <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} colors={COLORS_GRADIENTS} style={styles.header}>
                    <Text style={styles.appName}>Instagram</Text>    
                </LinearGradient>
                <View style={styles.content}>
                    <View style={styles.section}>
                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input} placeholder="Email"/>
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input} placeholder="Password"/>
                        </View>
                        <Touchable style={styles.loginBtn} feedback="opacity">
                            <Text style={styles.loginBtnText}>Login</Text>
                        </Touchable>
                        <View style={styles.forgotWrapper}>
                            <Text style={styles.callout} >Forgot your login details?</Text>
                            <Touchable feedback="opacity">
                                <Text style={styles.BtnText}>Get help signing in.</Text>
                            </Touchable>
                        </View>
                    </View>
                </View>  
            </View>
        );
    }
}

export default LoginScreen;