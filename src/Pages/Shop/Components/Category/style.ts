import {StyleSheet} from 'react-native';
import {color} from '../../../../Types/color';

export const Styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: color.white,
      padding: 8,
      marginRight: 16,
    },
    categoryTxt: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
