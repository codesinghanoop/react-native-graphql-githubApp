import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { graphql } from 'react-apollo';
import { APP_NAME, LOGIN_BUTTON, SIGNUP_BUTTON } from '@constants/Text'
import { PROFILE_LIST_SCREEN } from '@constants/Screens'
import Button from '@components/Button'
import queries from '@config/githubGraphQueries.queries'
import styles from './style'


class ProfileDetails extends Component {

    navigateToSearch = () => {
        this.props.navigation.navigate(PROFILE_LIST_SCREEN)
    }

    getDetailsSection = (detailType, detailValue) => {
        return (
            <View style={styles.detailsSection}>
                <Text style={styles.fieldName} >{detailType}: </Text>
                <Text>{detailValue || 'N/A'}</Text>
            </View>
        )
    }

    getRepoItem = (node) => {
        return (
            <View style={styles.repoItemContainer}>
                <View style={styles.repoDetails}>
                    <Text style={styles.fieldName} >Name: </Text>
                    <Text>{node.name}</Text>
                </View>
                <View style={styles.repoDetails}>
                    <Text style={styles.fieldName} >Description: </Text>
                    <Text style={{ width: '70%' }} numberOfLines={4} >{node.description}</Text>
                </View>
            </View>
        )
    }

    getRepoDetails = ({ error, loading, user }) => {
        console.log('the user repos are',user)
        if(!error){
            if(loading){
              return <Text>fetching Users... </Text>
            }else {
                return (
                    <View style={styles.repoContainer}>
                      <Text style={styles.repoField}>Pinned Repositories: </Text>
                      {user.pinnedItems.edges.map((ele, i) => {
                          return this.getRepoItem(ele.node)
                      })}
                    </View>
                )
            }
        } else return <Text>Error Fetching Repositories</Text>
    }

    render() {
        const { navigation: { state: { params: { userData } } }, data } = this.props
        const { avatarUrl, email, location, name, login, PinnedItems } = userData
        return (
            <View style={styles.profileContainer}>
              <ScrollView>
                <Image style={styles.coverPic} source={{ uri: avatarUrl }} />
                <View style={styles.detailsContainer}>
                    {this.getDetailsSection('Name', name)}
                    {this.getDetailsSection('Email', email)}
                    {this.getDetailsSection('UserName', login)}
                    {this.getDetailsSection('Location', location)}
                </View>
                {this.getRepoDetails(data)}
              </ScrollView>
            </View>
        )
    }
}

export default graphql(
    queries.pinnedRepos,
    {
      options: ({ searchQuery }) => ({ variables: { query: "codesinghanoop" } }), // compute query variable from prop
      notifyOnNetworkStatusChange: true
    }
)(ProfileDetails)
