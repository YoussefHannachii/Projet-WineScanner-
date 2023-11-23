import React from 'react';
import { View, Button, StyleSheet,TouchableOpacity,Text,ImageBackground } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../../assets/test5.jpg')}
    style={styles.bgImage} >     
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.boutton} onPress={() => navigation.navigate('CameraScreen')}>
          <Text style={styles.buttonText} >Scanner Vin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boutton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText} >Se Connecter </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    boutton: {
      backgroundColor:'white',
      padding: 5,
      margin:3,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center', // Centre verticalement
      alignItems: 'center',     // Centre horizontalement
    },
    buttonText: {
      color: 'black',           // Couleur du texte
      fontSize: 18,             // Taille de la police
      fontWeight: 'bold',       // Épaisseur de la police
    },

    bgImage:{
      flex:1,
      resizeMode: 'contain',
    },
  });
  


export default HomeScreen;