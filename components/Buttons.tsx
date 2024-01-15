import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = () => {
  return (
    <View style={{
            flex:6,
            flexWrap:'wrap',
            padding:10,
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
        <View style={{
            width:'100%',
            padding:10,
            paddingBottom:40,
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>/</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            width:'100%',
            padding:10,
            paddingBottom:40,
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>x</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            width:'100%',
            padding:10,
            paddingBottom:40,
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>-</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            width:'100%',
            padding:10,
            paddingBottom:40,
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#bd8908'
                }}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            width:'100%',
            padding:10,
            paddingBottom:40,
            justifyContent:'space-around',
            flexDirection:'row'
        }}>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.2,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#09e379',
                borderRadius:7,
                elevation:10

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#666'
                }}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:Dimensions.get('screen').width * 0.4,
                height:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'gold',
                borderRadius:7,
                elevation:10,

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'#fff'
                }}>=</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Buttons