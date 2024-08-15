import { View, Text, StyleSheet } from "react-native"

function subtitle({text}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{text}</Text>
        </View>
    )
}

export default subtitle

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center'
    },

    subtitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
})