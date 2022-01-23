import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Hotels from "./hotels/Hotels";
import Activites from "./activités/Activites";
import Restaurants from "./restaurants/Restaurants";

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image_style}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.text_amet}>
                    La ville de Béjaia s'étend sur 120,22 km² et compte 177 988 habitants (recensement de 2008) pour une densité de 1 480,52 habitants par km². L'altitude minimum est de 1 m, l'altitude maximum est de 660 m, l'altitude moyenne est de 949 m.
                    Le maire de la ville de Béjaia est actuellement Hannache Tahar pour le mandat 2012-2017.
                    Un habitant de la ville de Béjaia est appelé un Bédjaoui. Le nom français de la ville est Béjaïa.
                    Le surnom de la ville est "Vgaiet, Bougie".
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigate('PlacesList',{navigation:this.props.navigation})}>
                    <View style={styles.view}>
                        <Text style={{ color: "white" }}>Visiter </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigate('Activites')}>
                    <View style={styles.view}>
                        <Text style={{ color: "white" }}>Activites </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigate('Hotels')}>
                    <View style={styles.view}>
                        <Text style={{ color: "white" }}>Hotels </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigate('Restaurants')}>
                    <View style={styles.view}>
                        <Text style={{ color: "white" }}>Restaurants </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        backgroundColor: "#FFF",
        height: "100%"
    },
    text_amet: {
        marginHorizontal: 30,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.4
    },
    view_visit: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200,
        backgroundColor: "#9683EC",
        paddingVertical: 10,
        borderRadius: 23
    },
    view: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#9683EC",
        paddingVertical: 10,
        borderRadius: 23
    },

    image_style: {

        marginHorizontal: 30,
        marginVertical: 20

    }

})