import React from 'react';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

const Product = ({ product }) => {
  const {
    photo: {
      image: { publicUrlTransformed },
    },
  } = product;

  return (
    <ItemStyles>
      <img src={publicUrlTransformed} alt={product.name} />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* TODO: Add buttons to edit and delete items */}
    </ItemStyles>
  );
};

export default Product;
