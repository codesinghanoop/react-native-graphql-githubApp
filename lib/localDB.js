import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (userData, key) => {
    const currentDataInDb = await getItem(key);
    currentDataInDb.push(userData);
    console.log('the current is', currentDataInDb)
    try {
        await AsyncStorage.setItem(key, JSON.stringify(currentDataInDb));
    } catch (error) {
        console.log('the error is===>',error)
    }
}

export const getItem = async (key) => {
    const favList = await AsyncStorage.getItem(key) || "[]"
    return JSON.parse(favList)
}

export const findIndex = (currentDataInDb, userData) => currentDataInDb.indexOf(userData);

export const unsetFav = async (userData, key) => {
    const currentDataInDb = await getItem(key);
    const index = findIndex(currentDataInDb,userData);
    if(index !== -1) {
        currentDataInDb.splice(index, 1);
    }
    console.log('the current is =======', currentDataInDb)
    try {
        await AsyncStorage.setItem(key, JSON.stringify(currentDataInDb));
    } catch (error) {
        console.log('the error is===>',error)
    }
}


export const checkExist = (arr, id) => arr.includes(id);
