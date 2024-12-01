import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();  // Gets the product ID from the URL

  // Fetch product details based on productId (example static data here)
  const product = {
    name: `Product ${productId}`,
    description: `Detailed description of Product ${productId}`,
    price: `$${productId * 10}`,
    imageUrl: '/path/to/image.jpg'
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <img src={product.imageUrl} alt={product.name} className="w-full mb-6" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
        <p className="text-lg text-gray-600">{product.description}</p>
        <p className="text-xl text-blue-600">{product.price}</p>
      </div>
    </section>
  );
};


export default ProductDetails;
