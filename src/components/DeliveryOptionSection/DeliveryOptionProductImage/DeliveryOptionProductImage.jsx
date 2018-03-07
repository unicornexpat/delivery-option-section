import React from 'react';
import PropTypes from 'prop-types';

function DeliveryOptionProductImage({imageList, index}){
  return (
    <img id={`DeliveryOptionProductImage-${index}`} className="DeliveryOptionProductImage" alt={imageList[0].imageType} src={imageList[0].imageUrl} />
  );
}

DeliveryOptionProductImage.propTypes = {
  imageList: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};


export default DeliveryOptionProductImage;
