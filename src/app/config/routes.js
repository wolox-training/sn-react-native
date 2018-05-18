import { StackNavigator, TabNavigator } from 'react-navigation';

import Books from '../screens/books';
import Todo from '../screens/todo';

export const Stack = StackNavigator({
  Books: {
    screen: Books,
    navigationOptions: {
      title: 'WBooks',
    }
  },
  Todo: {
    screen: Todo,
    navigationOptions: {
      title: 'Todos',
    }
  }
});

export const Tabs = TabNavigator({
  Todo: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Todo'
    }
  },
  Books: {
    screen: Books,
    navigationOptions: {
      tabBarLabel: 'Books'
    }
  }
},
{
  lazyLoad: true,
  tabBarPosition: 'bottom'
})
