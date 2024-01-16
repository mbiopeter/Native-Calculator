import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Buttons = ({onButtonClick, onOperationClick}) => {

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
            <TouchableOpacity onPress ={() => onOperationClick('AC')} style={{
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
            <TouchableOpacity onPress ={() => onOperationClick('DEL')} style={{
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
            <TouchableOpacity  onPress ={() => onButtonClick('00')}  style={{
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
                }}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => onOperationClick('/')} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(7)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(8)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(9)} style={{
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
            <TouchableOpacity onPress ={() => onOperationClick('*')} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(4)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(5)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(6)} style={{
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
            <TouchableOpacity onPress ={() => onOperationClick('-')} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(1)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(2)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(3)} style={{
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
            <TouchableOpacity onPress ={() => onOperationClick('+')} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick(0)} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick('.')} style={{
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
            <TouchableOpacity onPress ={() => onButtonClick('=')} style={{
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