import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#7793ff',
        backgroundColor: '#e1d7ff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 6,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }

})