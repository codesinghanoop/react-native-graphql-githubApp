import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import UserListItem from './UserListItem'

const UserList = ({
    data: { loading, error, search, networkStatus, refetch },
    navigate,
    searchQuery
}) => {
  console.log('the user data is',loading, search, error, searchQuery)
  if(!error){
    if(loading){
      return <Text>fetching Users... </Text>
    }else {
      const responseData = search.edges
      return (
        <FlatList
          data={responseData}
          refreshing={networkStatus === 4}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.5}
          keyExtractor = {(item) => item.id}
          renderItem={({item, index}) =>(
            <UserListItem key={item.id} item={item} navigate={navigate} />
          )
          }
        />
      )
    }
  }else return <Text> Error Fetching users</Text>
}

export default UserList
