import Image from 'next/image';

export function ProductCard({ product }) {
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

      {/* <p className="p-small whitespace-pre-line text-center">{product.alt}</p> */}

      <button className="btn-primary" onClick={() => console.log(product)}>
        Saiba mais
      </button>
    </div>
  );
}
