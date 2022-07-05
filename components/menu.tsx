import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React from "react";

const Menu: React.FunctionComponent = () => {
    const navigation:any = useNavigation();
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate("About")} style={styles.menu}>
                <Text>About</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.menu}>
                <Text>Products</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ToDoList')} style={styles.menu}>
                <Text>ToDoList</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Exercise')}>
                <Text>Exercise</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Menu;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    menu: {
        marginRight: 30
    }
});
