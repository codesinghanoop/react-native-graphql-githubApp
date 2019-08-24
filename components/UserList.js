import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import UserListItem from './UserListItem'
import EmptyComponent from './EmptyComponent'

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
      return (
        <FlatList
          style={{ marginBottom: 8 }}
          data={responseData}
          refreshing={networkStatus === 4}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.5}
          keyExtractor = {(item) => item.id}
          renderItem={({item, index}) =>(
            <UserListItem key={item.node.id} item={item} navigate={navigate} />
          )}
          ListEmptyComponent={<EmptyComponent title='No Results' subTitle='Start adding favorites from user list tab' />}
        />
      )
    }
  }else return <Text> Error Fetching users</Text>
}

export default UserList
