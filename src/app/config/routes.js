import { StackNavigator, TabNavigator } from 'react-navigation';

import Books from '../screens/books';
import Todo from '../screens/todo';
import BookDetail from '../screens/bookDetail';

export const ROUTES = {
  TODO: () => 'Todo',
  BOOKDETAIL: () => 'BookDetail',
  BOOKS: () => 'Books'
};

const Tabs = TabNavigator(
  {
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

export default Navigator
