import { SectionTitle } from 'layout/SectionTitle';
import { ProductCard } from './_components/product-card';

export function Products({ products = [] }) {
  return (
    <section id="produtos" className=" section-p bg-primary-dark">
      <div className="container flex flex-col items-center justify-center">
        <SectionTitle title="Nossos Produtos" className="text-white" />

        <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
