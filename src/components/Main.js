import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Button, FlatList,Dimensions, TouchableOpacity,Alert } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Result from './Result'
import NetInfo from '@react-native-community/netinfo';
import FooterInfo from './FooterInfo'

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('screen').height;

const Main = () => {
     
    const dispatch = useDispatch()
    const globalState = useSelector((state) => state)
    const search = () => {
      axios(apiurlTmdb).then(({data}) => {
        let results = data.results;
        if (results.length == 0 ){
          console.log('No Movie')
        } else {
        // setIndicator(false)
        dispatch({type: 'STORE_DATA', results:results})
        
      }
        
      })
      
    }
    const CheckConnectivity = () => {
      NetInfo.fetch().then(globalState => {
        globalState.isConnected?  Alert.alert("Yeay!","You are online!", [
          { text: 'OK', onPress: search}
        ],
        ):Alert.alert("You are offline!");
        });
};

    useEffect(() => {
      CheckConnectivity()
    }, [])
    

    const apiurlTmdb = 'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf';



    // useEffect(() => {
    //     axios(apiurlTmdb).then(({data}) => {
    //         let results = data.results;
            
    //         if (results.length == 0 ){
    //           console.log('No Movie')
    //         } else {
    //         // setIndicator(false)
    //         dispatch({type: 'STORE_DATA', results:results})
            
    //         // storeData()
            
           
    //       }
            
    //       })
    // },[])



    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(globalState.result)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        console.log('data_tersimpan')
      } catch (e) {
        // saving error
      }
    }

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        const data = JSON.parse(value)
        console.log(data.length)
        if(data.length !== 0) {
          dispatch({type:'SHOW_MOVIES',data:data})
          console.log('data tertampil')
          // console.log(globalState.showData)
        } else {
          
         console.log('kosong nih')
        }
        
      } catch(e) {
        console.log('error baca nih')
      }
      showInfo()
    }

    useEffect(() => {
      storeData()
      getData()
      }, [globalState.result])


    // useEffect(() => {
    //   getData()
    // }, [[globalState.result]])

  //   useEffect(() => {
  //     if(globalState.page > 1 ){
  //     axios(apiurlTmdb + `&page=${globalState.page}`).then(({data}) => {
  //         let results = data.results;
  //         setState(prevState => {
  //           return {...prevState, result:results,  page: data.page}
  //         })
  //         // console.log(state.result)
  //         // .catch(function (error) {
  //         //     throw error;
  //         //     console.log(error);
  //         // });
          
  //       }) } else {
  //           () => null
  //       }

  // },[state.page])

    

    const showInfo = () => {

          setTimeout(() => {
            dispatch({type:'SHOW_INFO'})
          },10000)

    }

    const fetchUpdate = () => {
        dispatch({type:'ADD_PAGE'})
  
    }


    // useEffect(() => {
    //   axios(apiurlTmdb + `&page=${globalState.page}`).then(({data}) => {
    //     let results = data.results;
    //     dispatch({type: 'FETCH_NEW_DATA', newData:results})
    //     console.log(globalState.result)
        
    //   }) 
    //   }, [globalState.page])


    const separator = () => {
      return(
          <View style={{height:10, backgroundColor:'grey',flex:1, width:'100%'}}>
          </View>
      )
  }

      
    const clearAll = async () => {
      try {
        await AsyncStorage.removeItem('@storage_Key')
      } catch(e) {
        // clear error
      }
    
      console.log('Done.')
    }

    return (
        <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={globalState.showData.slice(0, globalState.slice)}
                    renderItem={({item}) => {
                    return <Result item={item} />
                    }}
                    keyExtractor={(item, index) => String(index)}
                    ItemSeparatorComponent={separator}
                    />
                    <FooterInfo />
                {/* {globalState.displayInfo ?<FooterInfo />:null} */}
                
        </View>
    )
}

export default Main


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: "center",
    width:'100%',
    paddingTop:20
  },
})