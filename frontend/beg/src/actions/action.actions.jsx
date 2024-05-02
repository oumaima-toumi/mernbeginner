import axios from 'axios'
import userConstants from './constantes' ; 
export const listerContacts =() => {
    return async dispatch =>{
        dispatch({type:userConstants.SET_ALL_USERS_REQUEST})
    try{
        //get data from backend and asign it to const res
        const res= await axios.get('http://127.0.0.1:5001/contacts`/lister')
        if(res.status == 200){
            dispatch({
                //this is the type of action
                type: userConstants.GET_ALL_USERS_SUCCUSS  ,
                //this is data to store in the store in order to change the state , data is proprty of acios 
                 payload :{users: res.data}})
        }
    }
    catch(error){
        dispatch({
            type: userConstants.GET_ALL_USERS_FAILURE ,
             payload :{users: res.data}})
    }
    }
}