import React, {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';
import {ICategoryResponse, IProductItem} from '../../../../Types/api';
import {Categories} from '../Category/Categories';
import {Header} from '../Header/Header';
import {ShopItem} from './ProductItem';

type ProductListFC = React.FC<
  PropsWithChildren<{
    searchQuery: string;
    categoryList: ICategoryResponse;
    productsData: IProductItem[];
  }>
>;
export const ProductList: ProductListFC = ({
  categoryList,
  productsData,
  searchQuery,
}) => {
  return (
    <FlatList
      ListHeaderComponent={
        <TopContent searchQuery={searchQuery} categoryList={categoryList} />
      }
      data={productsData}
      keyExtractor={product => product.id}
      renderItem={product => <ShopItem data={product.item} />}
      style={{flexDirection: 'column'}}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginVertical: 16,
      }}
    />
  );
};

type TopContentFC = React.FC<
  PropsWithChildren<{
    searchQuery: string;
    categoryList: ICategoryResponse;
  }>
>;

const TopContent: TopContentFC = ({searchQuery, categoryList}) => {
  return (
    <>
      <Header searchQuery={searchQuery} />
      <Categories categoryList={categoryList} />
    </>
  );
};
