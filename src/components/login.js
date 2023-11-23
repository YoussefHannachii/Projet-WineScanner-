import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez ajouter la logique de vérification des informations de connexion
    if (username.toUpperCase() == 'UTILISATEUR' && password === 'motdepasse') {
      // Connexion réussie, naviguer vers la page suivante
      setUsername('');
      setPassword('');
      navigation.navigate('BackOffice');
    } else {
      // Afficher un message d'erreur ou effectuer d'autres actions en cas d'échec de la connexion
      console.log('Échec de la connexion');
    }
  };

  return (
    <ImageBackground
    source={require('../../assets/test5.jpg')}
    style={styles.bgImage} > 
    <View style={[styles.container]}>
      <Text style={[styles.label]}>Nom d'utilisateur</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={[styles.label]}>Mot de passe</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Mot de passe"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.boutton} onPress={handleLogin}>
          <Text style={styles.buttonText} >Se Connecter</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color:'white'
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 8,
  
  },
  bgImage:{
    flex:1,
    resizeMode: 'contain',
  },
  boutton: {
    backgroundColor:'white',
    padding: 5,
    margin:3,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',           // Couleur du texte
    fontSize: 18,             // Taille de la police
    fontWeight: 'bold',       // Épaisseur de la police
  },
});

export default Login;
