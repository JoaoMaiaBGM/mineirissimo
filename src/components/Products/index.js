import { SectionTitle } from 'layout/SectionTitle';
import { usePublicAssets } from 'lib/cms/usePublicAssets';
import { ProductCard } from './_components/product-card';

export function Products() {
  const { data } = usePublicAssets();
  const products = data?.products;

  return (
    <div className="bg-primary-dark section-p">
      <section className="container flex flex-col items-center justify-center" id="produtos">
        <SectionTitle title="Nossos Produtos" className="text-white" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
