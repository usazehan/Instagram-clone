import { AsyncStorage } from 'react-native';
import { startLogin, startMainApp } from '../Nav';
import {iconsLoaded } from '../utils/themes';

export default async function appinitialized() {
    await iconsLoaded();
    const token = await AsyncStorage.getItem('@instagramclone/token');

    if(!token) {
        startLogin();
    } else {
        startMainApp();
    }
}