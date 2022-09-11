import {StyleSheet} from 'react-native';
import {color} from '../../Types/color';

export const Styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: color.bgGrey,
      paddingHorizontal: 16,
    },
    toastContainer: {
      position: 'absolute',
      zIndex: 10,
      left: 0,
      right: 0,
    },
  });
