import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import UserListItem from './UserListItem'

const UserList = ({
    data: { loading, error, search, networkStatus, refetch, fromFav, favList },
    navigate,
    searchQuery
}) => {
  if(!error){
    if(loading){
      return <Text>fetching Users... </Text>
    }else {
      const responseData = fromFav ? favList : search.edges
      console.log('the user data is',responseData)
      return (
        <FlatList
          data={responseData}
          refreshing={networkStatus === 4}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.5}
          keyExtractor = {(item) => item.id}
          renderItem={({item, index}) =>(
            <UserListItem key={item.node.id} item={item} navigate={navigate} />
          )
          }
        />
      )
    }
  }else return <Text> Error Fetching users</Text>
}

export default UserList
