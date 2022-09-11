import React, { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native';
import { ICategoryResponse } from '../../../../Types/api';
import { Category } from './Category';

type ICategoriesFC = React.FC<
  PropsWithChildren<{
    categoryList: ICategoryResponse;
  }>
>;

export const Categories: ICategoriesFC = ({categoryList}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categoryList.map(cat => (
        <Category data={cat} key={cat.id}/>
      ))}
    </ScrollView>
  );
};