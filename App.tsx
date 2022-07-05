import React from "react";
import About from "./pages/about/about";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Products from "./pages/products/products";
import ToDoList from "./components/toDoList";
import Exercise from "./pages/exercise/exercise";
const RootStack=createNativeStackNavigator();
function App(props:any) {

  return (
      <NavigationContainer>
          <RootStack.Navigator initialRouteName='Products'>
              <RootStack.Screen name='Products' component={Products} />
              <RootStack.Screen name='About' component={About} />
              <RootStack.Screen name='ToDoList' component={ToDoList} />
              <RootStack.Screen name='Exercise' component={Exercise} />
          </RootStack.Navigator>
      </NavigationContainer>
  );
}
export default App;
