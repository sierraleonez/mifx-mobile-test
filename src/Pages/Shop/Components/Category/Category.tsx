import React, { PropsWithChildren } from 'react'
import { Text, View } from 'react-native';
import { ICategory } from '../../../../Types/api';
import { Styles } from './style';

type ICategoryFC = React.FC<
  PropsWithChildren<{
    data: ICategory;
  }>
>;

export const Category: ICategoryFC = ({data}) => {
  return (
    <View style={Styles().container}>
      <Text style={Styles().categoryTxt}>{data.name}</Text>
    </View>
  );
};