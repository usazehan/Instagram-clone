import { AsyncStorage } from 'react-native';
import { startLogin, startMainApp } from '../Nav';
import {iconsLoaded } from '../utils/themes';
import {authToken} from '../utils/constants';

export default async function appinitialized() {
    await iconsLoaded();
    const token = await AsyncStorage.getItem(authToken);
    //const token = await AsyncStorage.removeItem(authToken);


    if(!token) {
        startLogin();
    } else {
        startMainApp();
    }
}