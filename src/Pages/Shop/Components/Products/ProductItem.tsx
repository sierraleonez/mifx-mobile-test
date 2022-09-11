import React, {PropsWithChildren} from 'react';
import {Image, Text, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IProductItem} from '../../../../Types/api';
import {Styles} from './styles';
type IShopItemFC = React.FC<
  PropsWithChildren<{
    data: IProductItem;
  }>
>;
export const ShopItem: IShopItemFC = ({data}) => {
  return (
    <View style={Styles().shopItemContainer}>
      <View>
        {data.new && <Text style={Styles().newItemTxt}>New</Text>}
        {data.out_of_stock && (
          <View style={Styles().outOfStockContainer}>
            <Text style={Styles().outOfStockTxt}>Out Of Stock</Text>
          </View>
        )}
        <Icon
          name="favorite-border"
          style={Styles().favoriteIconContainer}
          size={16}
        />
        <Image
          source={{uri: data.image}}
          style={Styles().productImage}
        />
      </View>
      <AirbnbRating
        isDisabled
        showRating={false}
        defaultRating={data.rating}
        size={12}
      />
      <Text>{data.name}</Text>
      <View
        style={Styles().priceSectContainer}>
        <Text style={Styles().priceTxt}>{data.price}</Text>
        {data.off && <Text style={{fontSize: 12}}>{data.off}</Text>}
      </View>
    </View>
  );
};
