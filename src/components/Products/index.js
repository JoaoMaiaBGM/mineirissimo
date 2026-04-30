import { usePublicAssets } from 'lib/cms/usePublicAssets';
import { AnimatedElement } from 'utils/animations';
import { ProductCard } from './_components/product-card';

export function Products() {
  const { data } = usePublicAssets();
  const products = data?.products;

  return (
    <div className="bg-mine-gray-150 section-p">
      <AnimatedElement
        element="section"
        className="container flex flex-col items-center justify-center"
        id="produtos"
      >
        <h1 className="h1 text-primary text-center mb-10">Nossos Produtos</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimatedElement>
    </div>
  );
}
