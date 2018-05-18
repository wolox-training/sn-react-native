import { StackNavigator, TabNavigator } from 'react-navigation';

import Books from '../screens/books';
import Todo from '../screens/todo';

const Tabs = TabNavigator({
  Todo: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Todo',
      title: 'Todo',
      headerTintColor: '#000'
    }
  },
  Books: {
    screen: Books,
    navigationOptions: {
      tabBarLabel: 'Books',
      title: 'Books'
    }
  }},
  {
    tabBarPosition: 'bottom'
  }
);

const Navigator = StackNavigator(
  {
    Home: { screen: Tabs }
  },
  {
    navigationOptions: {
      title: 'Wolox App'
    }
  }
);

export default Navigator
