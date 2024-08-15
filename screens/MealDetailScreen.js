import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect} from "react"
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({route, navigation}) {
    const favoriteMealCtx = useContext(FavoritesContext)

    const mealId = route.params.mealId

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)

    const changeFavoritesStatus = () => {
        if (mealIsFavorite) {
            favoriteMealCtx.removeFavorite(mealId)
        } else {
            favoriteMealCtx.addFavorite(mealId)
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton    
                        onPress={changeFavoritesStatus} 
                        icon={mealIsFavorite ? "star" : 'star-outline'}
                        color='black'/>
                )
            }
        })
    }, [navigation, changeFavoritesStatus])
    

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return (
        <ScrollView style={styles.rootContainer}>
        <View>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View>
                <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle text="Ingredients"/>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle text="Steps"/>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
    
})