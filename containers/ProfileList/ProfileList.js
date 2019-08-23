import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { graphql } from 'react-apollo';
import queries from '@config/githubGraphQueries.queries'
import SearchInput from '@components/SearchInput'
import UserList from '@components/UserList'
import { FAV_LIST_SCREEN } from '@constants/Screens'

import styles from './style'

class ProfileList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    searchQuery = (text) => {
        this.setState({
            searchTerm: text
        })
    }

    goToProfileDetails = () => {
        const { navigation: { navigate } } = this.props
        navigate(FAV_LIST_SCREEN)
    }

    render() {
        const { data, navigation: { navigate } } = this.props
        const { searchTerm } = this.state
        return (
            <View style={styles.container}>
                <SearchInput onChangeText={this.searchQuery} />
                <UserListFrag searchQuery={searchTerm} />
            </View>
        )
    }
}

const UserListFrag = graphql(
    queries.searchUser,
    {
      options: ({ searchQuery }) => ({ variables: { query: searchQuery } }), // compute query variable from prop
      notifyOnNetworkStatusChange: true
    }
)(UserList)

export default ProfileList
