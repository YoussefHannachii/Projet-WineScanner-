import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Text,ImageBackground,StyleSheet, View, Button } from 'react-native';
import GestionCommentaire from './gestionCommentaire';
import GestionVin from './gestionVin';
import HomeScreen from './home';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';


const BackOffice= () =>{

    
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
            <View style={styles.buttonContainer}>
              <DrawerItem
                label="Gestion Commentaires"
                onPress={() => {
                    props.navigation.navigate('GestionCommentaires');
                    props.navigation.closeDrawer();
                }}
                style={styles.drawerButton}
                labelStyle={styles.drawerLabel}
              />
              <DrawerItem
                label="Gestion Vins"
                onPress={() => {
                    props.navigation.navigate('GestionVin');
                    props.navigation.closeDrawer();
                }}
                style={styles.drawerButton}
                labelStyle={styles.drawerLabel}
              />
              <DrawerItem
              label="Déconnexion"
              onPress={() => {
                  navigation.navigate('Login');
              }}
              style={styles.drawerButton}
              labelStyle={styles.drawerLabel}
              />
            </View>
            {/* Contenu du Drawer standard */}
            <DrawerContentScrollView {...props} />
          </DrawerContentScrollView>
        );
      };
      


    return(
         
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="GestionCommentaires" component={GestionCommentaire} />
            <Drawer.Screen name="GestionVin" component={GestionVin} />
        </Drawer.Navigator>
        
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
    buttonContainer: {
        marginTop: 20,
      },
      drawerButton: {
        justifyContent: 'flex-start',
        paddingLeft: 20,
      },
      drawerLabel: {
        fontSize: 16,
      },
  });
  


export default BackOffice;