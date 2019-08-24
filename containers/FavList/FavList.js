import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { getItem } from '@utils/localDB'
import FavListComponent from '@components/UserList'
import styles from './style'

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

    refreshList = async () => {
        this.setState({
            favList: JSON.parse(await getItem())
        })
    }

    getFakeObj = () => {
        const { favList } = this.state
        return {
            error: false,
            loading: false,
            favList,
            fromFav: true,
            refetch: this.refreshList
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FavListComponent data={this.getFakeObj()} navigate={this.goToProfileDetails}  />
            </View>
        )
    }
}

export default FavList
