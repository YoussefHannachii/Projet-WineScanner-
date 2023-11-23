import React from 'react';
import { Text,ImageBackground,StyleSheet, View } from 'react-native';

const GestionCommentaire= () =>{
    return(
        <ImageBackground
        source={require('../../assets/test5.jpg')}
        style={styles.bgImage} >  
        <View style={styles.container}>
           <Text>Gestion Commentaires</Text> 
        </View>
        </ImageBackground>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Centre verticalement
      alignItems: 'center',     // Centre horizontalement
    },
    bgImage:{
      flex:1,
      resizeMode: 'contain',
    },
  });
  


export default GestionCommentaire;