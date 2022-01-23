import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Visiter_carte extends React.Component {
  render() {
    const places = this.props.navigation.state.params.place
    console.log('places dans visiter carte :', places)
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.main_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{places.nom}</Text>
            </View>
            <Image
              style={styles.image}
              source={{ uri: places.image }}
            />


            <View style={styles.description_container}>
              <Text style={styles.description_text} >{places.description}</Text>

            </View>


            <View style={styles.map_container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: 36.44630168875062,
                  longitude: 4.529192299458126,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              >
              </MapView>
            </View>



          </View>
        </ScrollView>
      </SafeAreaView>


    )
  }
}

const styles = StyleSheet.create({
  main_container: {

    height:800

  },
  image: {
    flex: 2,
    backgroundColor: 'gray'
  },
  header_container: {
    
    flexDirection: 'column'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',

  },

  description_container: {
    flex: 5
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },

  map_container: {
    ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  container: {

    paddingTop: StatusBar.currentHeight
  }

})

