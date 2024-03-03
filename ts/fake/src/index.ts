type ProductsObject = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsJson = {
  products: ProductsObject[];
  limit: number;
  skip: number;
  total: number;
};

const fake = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const products:ProductsJson = await response.json();
    console.log(products);
}

fake();

