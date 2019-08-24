import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (userData) => {
    const currentDataInDb = JSON.parse(await getItem('favList'));
    currentDataInDb.push(userData);
    console.log('the current db is',currentDataInDb)
    try {
        await AsyncStorage.setItem('favList', JSON.stringify(currentDataInDb));
    } catch (error) {
        console.log('the error is===>',error)
    }
}

export const getItem = async () => {
    const favList = await AsyncStorage.getItem('favList') || "[]"
    console.log('the favlist is==>', favList)
    return favList
}
