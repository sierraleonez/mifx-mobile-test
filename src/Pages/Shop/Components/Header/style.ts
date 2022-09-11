import {StyleSheet} from 'react-native';
import {color} from '../../../../Types/color';

export const Styles = () =>
  StyleSheet.create({
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 24,
    },
    titleContainer: {
      flex: 2,
      paddingHorizontal: 16,
    },
    titleTxt: {
      color: color.black,
      fontWeight: 'bold',
    },
    iconContainer: {
      backgroundColor: color.white,
      borderRadius: 50,
      padding: 8,
    },
  });
