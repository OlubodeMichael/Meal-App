import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import FavoritesContextProvider from './store/context/favorites-context';


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({size}) => {
          return <Ionicons color="black" size={size} name="list"/>
        }
      }}/>
      <Drawer.Screen 
        name="Favorite" 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({size}) => {
            return <Ionicons color="black" size={size} name="star"/>
          }
        }}
      />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealOverviewScreen} 
            options={{ headerBackTitleVisible: true, headerBackTitle: "Back", }}
          />
          <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{
            headerBackTitleVisible: true, headerBackTitle: "Back",
            title: 'About the meal'
          }}
        >
        </Stack.Screen>
        </Stack.Navigator>
        

      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
});
