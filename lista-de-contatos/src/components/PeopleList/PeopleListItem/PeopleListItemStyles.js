import { StyleSheet} from "react-native";
import {colors, fonts} from '../../../layout/'
export default StyleSheet.create({
    container: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor:  colors.divider,
        backgroundColor: colors.lightPrimary,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: fonts.regular,
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