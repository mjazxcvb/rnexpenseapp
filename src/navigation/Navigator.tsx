import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'modules/main/screens/Home';
import Expense from 'modules/main/screens/Expense';
import Income from 'modules/main/screens/Income';
import useNavigationOptions from 'hooks/useNavigationOptions';
import AddIncome from 'modules/creation/screens/AddIncome';
import AddExpense from 'modules/creation/screens/AddExpense';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useBottomNavigationOptions from 'hooks/useBottomNavigationOptions';

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Expense: undefined;
  Income: undefined;
  AddIncome: undefined;
  AddExpense: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const {bottomNavigation} = useBottomNavigationOptions();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={bottomNavigation('home')}
      />
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={bottomNavigation('wallet')}
      />
      <Tab.Screen
        name="Income"
        component={Income}
        options={bottomNavigation('hand-coin')}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  const navigationOptions = useNavigationOptions();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{
              ...navigationOptions,
              headerTitle: 'Home',
              headerLeft: undefined,
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="AddIncome"
            component={AddIncome}
            options={{title: 'Add Income', ...navigationOptions}}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{title: 'Add Expense', ...navigationOptions}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
