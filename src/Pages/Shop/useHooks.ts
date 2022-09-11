import {useCallback, useEffect, useState} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

import {instance} from '../../API/instance';
import {ICategoryResponse, IProductItem} from '../../Types/api';

export const useHooks = () => {
  const [productsData, setProductsData] = useState<IProductItem[]>([]);
  const [categoriesData, setCategoriesData] = useState<ICategoryResponse>([]);

  const get = useCallback(async (path: string, setFn: (data: any) => void) => {
    try {
      let {status, data} = await instance.get(path);
      let stString = status.toString()[0];
      if (stString === '2') {
        setFn(data);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Something is wrong',
        });
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: String(err),
      });
    }
  }, []);

  useEffect(() => {
    get('/products', setProductsData);
    get('/category', setCategoriesData);
  }, []);

  return {
    datas: {productsData, categoriesData},
    methods: {},
  };
};
