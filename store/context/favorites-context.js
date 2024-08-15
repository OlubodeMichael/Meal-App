import { createContext, useState} from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setFavoriteMealIds] = useState([])

    const addFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((favId) => favId !== id)) 
    }

    const value = {
        ids: favoriteMealsIds, 
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>

}

export default FavoritesContextProvider;