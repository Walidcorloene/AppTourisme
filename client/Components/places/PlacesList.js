import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
//import Data from '../Helpers/Data'
//import { getPlaces } from '../../Helpers/API'

import Visiter from './Visiter'

class PlacesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      places: [],
      
    };
    
  }

  componentDidMount() {
    let myHeaders = new Headers();
    let GetInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };

    fetch('http://192.168.43.44:5000/api/places', GetInit)
      .then(res => res.json()).then((result) => {
        let data = JSON.stringify(result.places)
        this.setState({
          isLoaded: true,
          places: JSON.parse(data)
        })
      }).catch(err => {
        console.error(err)
      })
  }


  _displayLoading() {
    if (this.state.isLoaded) {
      return (
        <View style={styles.main_container}>
          <Text>en cours de chargement</Text>
        </View>
      )
    }
  }

  _displayPlaces(props) {

    if (this.state.isLoaded == true) {
      return (
        <View style={styles.main_container}>
          <FlatList
            data={this.state.places}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Visiter navigation={props} places={item} />}
          />
        </View>
      )
    }
  }


  render() {

    const { error, isLoaded, items } = this.state;
    const {navigate} = this.props.navigation;
    
    return (

      <View style={styles.main_container}>
        {this._displayPlaces(this.props.navigation)}
      </View>
    )
  }
}


const styles = StyleSheet.create({

  main_button: {
    height: 50,
    flex: 1
  },

  main_container: {
    marginTop: 20,
    flex: 1
  },

  textinput: {

    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    paddingLeft: 5
  }
})

export default PlacesList