import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView 
            provider = {PROVIDER_GOOGLE}
            style={styles.mapStyle} 
            region={{
                latitude: 54.0039,
                longitude: -2.7890,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            showsUserLocation
        />
      </View>
    );
  }
}

// findCurrentLocation =() => {
//   navigator.geolocation.getCurrentPosition(
//     position => {
//       const latitude =JSON.stringify(position.coords.latitude);
//       const longitude = JSON.stringify(position.coords.longitude);

//       this.setState({
//         latitude,
//         longitude
//       });
//     },
//     {
//       enableHighAccuracy: true, timeout:20000, maximumAge: 1000
//     }
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

