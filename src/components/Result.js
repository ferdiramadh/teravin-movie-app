import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Result = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.original_title}</Text>
            <Text style={styles.date}>{item.release_date}</Text>
        </View>
    )
}


export default Result

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        width:'100%',
        height:100,
        padding:10,
        backgroundColor:'white'
    },
    title:{
        fontWeight:'bold',
        fontSize:24
    },
    date:{
        fontSize:18
    }
})
