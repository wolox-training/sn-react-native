import { StackNavigator, TabNavigator } from 'react-navigation';

import Books from '../screens/books';
import Todo from '../screens/todo';
import BookDetail from '../screens/bookDetail';

const Tabs = TabNavigator(
  {
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
    tabBarPosition: 'bottom'
  }
);

const Navigator = StackNavigator(
  {
    Home: { screen: Tabs },
    BookDetail: { screen: BookDetail }
  },
  {
    navigationOptions: {
      title: 'Wolox App'
    }
  }
);

export default Navigator;
