import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '@themes/Colors'
import { FAV_LIST_SCREEN } from '@constants/Screens'

const ListItem = ({item, navigate}) => (
    <TouchableOpacity style={styles.container} onPress={() => navigate(FAV_LIST_SCREEN)} >
        <Image source={{ uri: item.node.avatarUrl }} style={styles.image} />
        <Text>{item.node.name}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 60,
        backgroundColor: Colors.light_blue,
        flexDirection: 'row'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
})

export default ListItem
