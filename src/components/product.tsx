import { productType } from '~/types/product'
type Props = { product: productType }
const Product = (props: Props) => {
  return (
    <>
      <h1>{props.product.title}</h1>
      <img src={props.product.thumbnail} alt={props.product.title} />
      <p>Gia: {props.product.price}</p>
      <p>Gia: {props.product.description}</p>
    </>
  )
}

export default Product
