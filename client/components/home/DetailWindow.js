import React, { useState } from 'react';
import { connect } from 'react-redux';
import StarRating from './icons/StarRating';

const DetailWindow = ({ itemId, products, count, auth }) => {
  // const { products } = props;
  // const id = props.match.params.id * 1 || '';
  // console.log(auth);
  const product = products.find((product) => product.id === itemId) || {};

  let classes =
    'nick   transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:bg-blue-300 hover:scale-110 hover:opacity-100 m-8 p-8 relative';
  count > 2 ? (classes += ' col-span-2') : (classes += ' col-span-3');

  let rating = product.rating;

  return (
    <div className={classes}>
      <img
        src={product.image_URL}
        alt=""
        className="mx-auto rounded-lg"
        width="60%"
      />

      <div className="px-8">
        <div className="mt-8  md:flex md:justify-around">
          <StarRating rating={rating} />
        </div>
        <div className="md:flex md:justify-between py-8">
          <h3 className="font-semibold">{product.category}</h3>
          <h4>{product.alcohol_type}</h4>
        </div>

        {/* <p>{product.description}</p> */}

        <h4 className="">Country of Origin: {product.region}</h4>

        <div className="mb-16">
          <h4>Alcohol Percentage: {product.alcohol_percentage}</h4>
        </div>
        <div className="md:flex md:justify-between py-8 absolute bottom-0 wider">
          <h4>Price: ${product.price}</h4>
          <button className="btn transition-colors duration-300  mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ products, auth }) => {
  return {
    products,
    auth,
  };
};

export default connect(mapState)(DetailWindow);
