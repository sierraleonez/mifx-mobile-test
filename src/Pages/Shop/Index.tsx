import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

import { Styles } from './style'
import {useHooks} from './useHooks';
import { color } from '../../Types/color';
import {ProductList} from './Components/Products/ProductList';

function Shop() {
  const {
    datas: {productsData, categoriesData},
  } = useHooks();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={color.bgGrey} barStyle={'dark-content'}/>
        <View style={Styles().container}>
          <CustomToast />
          <ProductList
            categoryList={categoriesData}
            productsData={productsData}
            searchQuery={'shoes'}
          />
        </View>
    </SafeAreaView>
  );
}

export default Shop;

function CustomToast() {
  return (
    <View style={Styles().toastContainer}>
      <Toast />
    </View>
  );
}
