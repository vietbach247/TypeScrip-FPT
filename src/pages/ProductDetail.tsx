import React from 'react'

interface ProductDetailProps {
  productId: number
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  return <div>Product Detail - ID: {productId}</div>
}

export default ProductDetail
