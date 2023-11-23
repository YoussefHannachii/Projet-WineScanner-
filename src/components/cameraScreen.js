import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)


  

  useEffect(() => {
    async function checkCameraPermission() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    }

    checkCameraPermission();
  }, []);

  const openCamera = () => {
    if (hasCameraPermission) {
      setIsCameraOpen(true);
      console.log("camera openning");
    }
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  const takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      setCapturedImage(photo);
    }
  };

  const pictureButtonPressed=async()=>{
   
      if (!Camera) return
      const photo = await Camera.takePictureAsync()
      console.log(photo)
      setPreviewVisible(true)
      setCapturedImage(photo)
    }

    let pictureTakenBoolean = previewVisible && capturedImage;

  return (
    
      <View style={{ flex: 1 }}>
      {isCameraOpen ? 
      (
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back}>  
          <Button title="Fermer la caméra" onPress={closeCamera}/>
          <View
            style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            padding: 20,
            justifyContent: 'space-between'
            }}
          >
            <View
            style={{
            alignSelf: 'center',
            flex: 1,
            alignItems: 'center'
            }}
            >
                <TouchableOpacity
                onPress={pictureButtonPressed}
                style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: '#fff'
                }}
                />
        </View>
        </View>
        </Camera>
      ) : (
        <ImageBackground style={{flex: 1, resizeMode:'contain'}} source={require('../../assets/test5.jpg')}>
          <View  style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {hasCameraPermission === null ? (
            <Text>Demande d'autorisation de la caméra en cours...</Text>
          ) : hasCameraPermission === false ? (
            <Text>L'autorisation de la caméra a été refusée.</Text>
          ) : (
            
            <TouchableOpacity title="Ouvrir la caméra" style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: 'blue',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }} 
            onPress={openCamera} >
            <Text style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>Ouvrir Camera</Text>
            </TouchableOpacity>
          )}
        </View></ImageBackground>
      )}
    </View>
    
  );
};

export default CameraScreen;
