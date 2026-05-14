import Image from 'next/image';

import { ModalNoMore } from './modal-no-more';

export function ProductCard({ product }) {
  const dialogId = `product-modal-${product.id}`;

  return (
    <div className="card flex flex-col items-center justify-center gap-6">
      <h4 className="h4 text-primary capitalize text-center">{product.title}</h4>

      <div className="max-w-fit max-h-52 aspect-4/3">
        <Image
          src={product.url}
          className="w-full h-full object-cover rounded-xl"
          width={200}
          height={200}
          alt={`Imagem de ${product.title}`}
        />
      </div>

      <button type="button" command="show-modal" commandfor={dialogId} className="btn-primary">
        Saiba mais
      </button>
      <ModalNoMore dialogId={dialogId} product={product} />
    </div>
  );
}
