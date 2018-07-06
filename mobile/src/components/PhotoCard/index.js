import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './Header';
import ActionBtns from './ActionBtns';
import Meta from './Meta';
import Touchable from '@appandflow/touchable';
import {human, iOSColors} from 'react-native-typography';
import CommentInput from '../CommentInput';
import {graphql} from 'react-apollo';
import {likePhotoMutation} from '../../graphql/mutations';
import { FeedsPhotoFragment } from '../../screens/FeedsScreen/fragments';
import {defaultDataIdFromObject} from 'apollo-cache-inmemory';

const styles = StyleSheet.create({
    root: {
        minHeight: 800,
        backgroundColor: 'red',
        paddingBottom: 10,
    },
    img: {
        flex: 1,
    },
    commentsWrapper: {
        height: 50,
        paddingHorizontal: 16,
    },
    commentViewAll: {
        ...human.calloutObject,
        color: iOSColors.midGray,
    },
    timeAgoWrapper: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
    },
    timeAgo: {
        ...human.footnoteObject,
        color: iOSColors.midGray,
    },
});

class PhotoCard extends Component {
    state = { };
    _onLikedPress = () => {
        this.props.onLikePhotoMuation();
    };
    render() {
        return (
            <View style={styles.root}>
                <Header />
                <Image style={styles.img} source={{uri: this.props.data.imageUrl,}}/>
                <ActionBtns viewerLike={this.props.data.viewerLike} onLikedPress={this._onLikedPress} />
                <Meta caption={this.props.data.caption} />
                <View style={styles.commentsWrapper}>
                    <Touchable feedback="opacity">
                        <Text style={styles.commentViewAll}>View all 13 comments</Text>
                    </Touchable>
                    <CommentInput />
                </View>
                <View style= {styles.timeAgoWrapper}>
                    <Text style={styles.timeAgo}>4 hours ago</Text>
                </View>
            </View>
        );
    }
}

export default graphql(likePhotoMutation, {
    props: ({ mutate, ownProps }) => ({
        onLikePhotoMutation: () => mutate({
            variables: {
            photoId: ownProps.data.id,
            },
            update: (store, { data: { likePhoto } }) => {
                const id = defaultDataIdFromObject({
                    __typename: 'Photo',
                    id: ownProps.data.id,
                });
                const photo = store.readFragment({
                    id,
                    fragment: FeedsPhotoFragment,
                });  
                store.writeFragment({
                    id,
                    fragment: FeedsPhotoFragment,
                    data: {
                        ...photo,
                        viewerLike: likePhoto,
                    },
                });
            },
        }),
    }),
  })(PhotoCard);