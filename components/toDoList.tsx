import React, {useState} from "react";
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";

const ToDoList: React.FunctionComponent = () => {
    const [val, setVal] = useState('');
    const [list, setList] = useState<Array<string>>([]);
    const handleChange = (text: string) => {
        setVal(text);
    }
    const addToList = () => {
        setList(prevState => [
            ...prevState,
            val
        ])
    }
    return (
        <ScrollView style={styles.container}>
            <TextInput value={val} onChangeText={(text) => handleChange(text)} style={styles.input}/>
            <Button title={'add'} onPress={addToList}/>
            {
                (list.length>0)? (
                    <View>
                        {
                            list.map((elem, i)=>(
                                <Text key={i}>
                                    {elem}
                                </Text>
                            ))

                        }
                    </View>
                ): <Text>Your list is empty</Text>
            }
        </ScrollView>
    )
}
export default ToDoList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#daef9b'
    },
    input: {
        fontSize: 18,
        color: 'white',
        borderStyle: 'solid',
        backgroundColor: '#8b9b5b'
    }
});
