import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, CameraRoll, Image, FlatList} from 'react-native';

const MAX_PHOTOS = 20;
const styles =StyleSheet.create({
    imageWrapper: {
        width: 100,
        height: 100,
    },
    image: {
        flex: 1,
    },

});
class CreatePhotoScreen extends PureComponent {
    state = {
        images: []
    };
    componentDidMount() {
        this._getPhotos();
    }
    _getPhotos = async after => {
        const res = await CameraRoll.getPhotos({
            first: MAX_PHOTOS,
            after,
        });
        this.setState({
            images: [...this.state.images, res.edges],
        });
    };
    _renderItem = ({item}) => {
        return (
            <View style={styles.imageWrapper}>
                <Image source={{uri: item.node.image.uri}} style={styles.image}/>
            </View>
        )
    }
    _keyExtractor = (item) => item.node.image.filename
    render() {
        return (
            <FlatList 
                data={this.state.images}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

export default CreatePhotoScreen;