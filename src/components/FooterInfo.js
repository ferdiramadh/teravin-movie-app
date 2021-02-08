import React from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native'
import {useDispatch} from 'react-redux'


const windowWidth = Dimensions.get('window').width;

const FooterInfo = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.left_side}>
                <Text style={{color:'white'}}>Penyimpanan Lokal Telah Diperbarui</Text>
            </View>
            <View style={styles.right_side}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    dispatch({type:'ADD_SLICE'})
                    dispatch({type:'SHOW_INFO'})

                    }}>
                        <Text style={{color:'white'}}>Tampilkan</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FooterInfo

const styles = StyleSheet.create({
    container:{
        height:100, 
        backgroundColor:'blue',
        flexDirection:'row',
        
        alignItems:'flex-end', 
        padding:5, 
        width:windowWidth,
        position:'absolute', 
        bottom:0
    },
    title:{
        fontWeight:'bold',
        fontSize:28
    },
    date:{
        fontSize:20
    },
    left_side:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        height:'100%',
    },
    right_side:{
        width: '50%',
        height:'100%',
    },
    button:{
        width:'80%',
        height:30,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        marginLeft:20,
        borderRadius: 5
    }
})