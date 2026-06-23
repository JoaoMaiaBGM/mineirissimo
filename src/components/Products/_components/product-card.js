import Image from 'next/image';

import { KnowMoreModal } from './modal-know-more';

export function ProductCard({ product }) {
  const dialogId = `product-modal-${product.id}`;

  return (
    <div className="h-full w-full min-w-0">
      <div className="card flex h-full w-full flex-col items-center justify-between gap-6">
        <h4 className="h4 text-primary capitalize text-center">{product.title}</h4>

        <div className="aspect-4/3 w-full max-h-52 overflow-hidden rounded-xl">
          <Image
            src={product.url}
            className="h-full w-full object-cover"
            width={200}
            height={200}
            alt={`Imagem de ${product.title}`}
          />
        </div>

        <button type="button" command="show-modal" commandfor={dialogId} className="btn-primary">
          Saiba mais
        </button>
      </div>

      <KnowMoreModal dialogId={dialogId} product={product} />
    </div>
  );
}
