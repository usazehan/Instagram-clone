import {Navigation} from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';
import ExploreScreen from './ExploreScreen';
import LoginScreen from './LoginScreen';
import WithProvider from '../components/WithProvider';
import CreatePhotoScreen from './CreatePhotoScreen';


export const registerScreens = () => {
    Navigation.registerComponent('instagramclone.FeedsScreen', () => WithProvider(FeedsScreen));
    Navigation.registerComponent('instagramclone.ExploreScreen', () => WithProvider(ExploreScreen));
    Navigation.registerComponent('instagramclone.LoginScreen', () => WithProvider(LoginScreen));
    Navigation.registerComponent('instagramclone.CreatePhotoScreen', () => WithProvider(CreatePhotoScreen));

}