import {Text, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import styles from "./styles";

const About: React.FunctionComponent = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello About Page</Text>
        </View>
    )
}
export default About;
