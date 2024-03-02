import React from 'react';
import type { FC } from 'react';

import { cnProduct } from './Product.classname';

import './Product.css';

type ProductProps = {
  img: string;
  discont?: number;
  text: string;
  rating: string;
  sales: number;
  price: number;
  last_price?: number;
};

const Product: FC<ProductProps> = ({
  img,
  discont,
  text,
  rating,
  sales,
  price,
  last_price,
}) => {
  return (
    <div className={cnProduct()}>
      <div className={cnProduct('block-img')}>
        <img className={cnProduct('img')} src={img} alt="" />
        {discont && (
          <div className={cnProduct('discont')}>{-discont + '%'}</div>
        )}
      </div>
      <div className={cnProduct('block-info')}>
        <p className={cnProduct('desc')}>{text}</p>
        <div className={cnProduct('pay-info')}>
          <p className={cnProduct('rating')}>{rating + ' ⭐'}</p>
          <p className={cnProduct('sales')}>{sales + ' купили'}</p>
        </div>
        <div className={cnProduct('price-info')}>
          <p className={cnProduct('price')}>{price + '₽'}</p>
          <p className={cnProduct('last_price')}>{last_price + '₽'}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
