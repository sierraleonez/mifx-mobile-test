import {StyleSheet} from 'react-native';
import {color} from '../../../../Types/color';

export const Styles = () =>
  StyleSheet.create({
    shopItemContainer: {
      backgroundColor: color.white,
      padding: 8,
      width: '48%',
      borderRadius: 8,
      shadowColor: color.black,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
    },
    newItemTxt: {
      position: 'absolute',
      top: '5%',
      fontSize: 12,
      fontWeight: 'bold',
      zIndex: 3,
      color: color.black,
    },
    outOfStockContainer: {
      backgroundColor: color.red,
      padding: 4,
      top: '5%',
      borderRadius: 4,
      position: 'absolute',
      zIndex: 4,
    },
    outOfStockTxt: {
      fontSize: 12,
      color: color.white,
      fontWeight: 'bold',
    },
    favoriteIconContainer: {
      position: 'absolute',
      top: '5%',
      right: 0,
    },
    productImage: {
      width: '100%',
      aspectRatio: 1 / 1,
    },
    priceSectContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    priceTxt: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
