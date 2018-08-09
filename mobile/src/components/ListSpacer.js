import {PureComponent} from 'react';
import {Keyboard, Dimensions, Animated} from 'react-native';

class ListSpacer extends PureComponent {
    state = {
        screenHeight: Dimensions.get('window').height,
        flatListHeight: new Animated.Value(Dimensions.get('window').height),
    };
    componentDidMount() {
        this._keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this._keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillMount() {
        this._keyboardDidShowListener.remove();
        this._keyboardDidHideListener.remove();
    }
    _keyboardDidShow = (e) => {
        Animated.timing(this.state.flatListHeight, {
            toValue: Dimensions.get('window').height - e.endCoordinates.height,
            duration: 250,
        }).start();
    };
    _keyboardDidHide = () => {
        Animated.timing(this.state.flatListHeight, {
            toValue: Dimensions.get('window').height,
            duration: 250,
        }).start();
    };

    render() {
        const renderProps = {
            flatListHeight: this.state.flatListHeight,
        }
        if (this.props.children) {
            return this.props.children(renderProps);
        }
        return this.props.render(renderProps);
    }
}

export default ListSpacer;