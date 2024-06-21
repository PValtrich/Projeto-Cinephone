import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_COLLECTION } from '../storageConfig'

export default async function userCreate(id, name){
    try {
        //console.log(id, name)
        await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify({id, name}))
    } catch (error) {
        throw(error)
    }
}