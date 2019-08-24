import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { getItem } from '@utils/localDB'

class FavList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favList: []
        }
    }

    async componentDidMount() {
        console.log('the list is====>>>', JSON.parse(await getItem()))
        this.setState({
            favList: JSON.parse(await getItem())
        })
    }

    render() {
        return <Text>FavList</Text>
    }
}

export default FavList
