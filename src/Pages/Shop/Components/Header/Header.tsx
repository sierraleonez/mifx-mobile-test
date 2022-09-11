import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Styles} from './style';
type IHeaderFC = React.FC<
  PropsWithChildren<{
    searchQuery: string;
  }>
>;
export const Header: IHeaderFC = ({searchQuery}) => {
  return (
    <View style={Styles().headerContainer}>
      <View style={Styles().iconContainer}>
        <Icon name="arrow-back" size={20} color={'#000'} />
      </View>
      <View style={Styles().titleContainer}>
        <Text style={Styles().titleTxt}>{searchQuery}</Text>
      </View>
      <View style={Styles().iconContainer}>
        <Icon name="tune" size={20} color={'#000'} />
      </View>
    </View>
  );
};
