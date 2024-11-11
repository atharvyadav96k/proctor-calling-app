import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 24,
        backgroundColor: '#0D0D0D',
        flex: 1
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        color: '#A9EBF9',
        marginLeft: 7

    },
    flexEnd: {
        flex: 1,
        justifyContent: 'flex-end'
    }, 
    flexCenter: {   
        flex: 1,
        justifyContent: 'center'
    },
    dangerText: {
        color: '#FF7262'
    },
    dangerBackground: {
        backgroundColor: '#FF7262'
    },
    greenBackground: {
        backgroundColor: '#92E498'
    }
})
export default globalStyle;