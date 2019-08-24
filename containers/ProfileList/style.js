import React from 'react'
import {
    StyleSheet
} from 'react-native'
import Metrices from '@themes/Metrices'
import Fonts from '@themes/Fonts'
import GlobalStyle from '@themes/globalStyle'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 1,
    },
    coverPic: {
        resizeMode: 'cover',
        width: '100%',
        height: 200,
        marginTop: Metrices.baseMargin
    },
    detailsSection: {
        flexDirection: 'row',
        width: '100%',
        margin: Metrices.baseMargin,
        height: 60,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    detailsContainer: {
        width: '100%'
    },
    fieldName: {
        ...Fonts.style.boldLabel
    },
    repoContainer: {

    },
    repoField: {
        ...Fonts.style.boldLabel,
        textAlign: 'center'
    },
    repoItemContainer: {
        width: '100%',
        height: 80,
        margin: Metrices.doubleBaseMargin,
    },
    repoDetails: {
        flexDirection: 'row',
    },
    button: {
        ...GlobalStyle.button,
        marginTop: Metrices.doubleBaseMargin,
        textAlign: 'center'
    }
})

export default styles
