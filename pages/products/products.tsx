import {Alert, Button, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import Menu from "../../components/menu";
import About from "../about/about";
import styles from "./styles";

const Products: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount((prevState) => prevState + 1)
    }
    const decrease = () => {
        setCount((prevState) => prevState - 1)
    }
    const handlePress = () => {
        Alert.alert('are you sure', 'answer', [
            {text: 'yes'},
            {text: 'no'}
        ])
    }
    useEffect(() => {
        if (count < 0) {
            alert('value cant be less than zero')
        }
    }, [count])
    return (
        <SafeAreaView style={styles.container}>
            <Menu/>
            <View>
                <Text style={styles.text}>Hello world</Text>
                <Button title={'click here'} onPress={handlePress}/>
            </View>
            <View style={styles.plusMinus}>
                <Button title={'-'} onPress={decrease}/>
                <Text style={styles.text}>{count}</Text>
                <Button title={'+'} onPress={increase}/>
            </View>
        </SafeAreaView>
    )
}
export default Products;

