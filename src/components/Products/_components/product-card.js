import Image from 'next/image';

export function ProductCard({ product }) {
  return (
    <div className="card flex flex-col items-center justify-center gap-6">
      <h5 className="h5 text-primary">{product.title}</h5>

      <div className="w-80 h-52 aspect-square">
        <Image
          src={product.url}
          className="w-full h-full object-cover rounded-xl"
          width={200}
          height={200}
          alt={`Imagem de ${product.title}`}
        />
      </div>

      <p className="p-small whitespace-pre-line text-center">{product.alt}</p>

      <button className="btn-primary">Saiba mais</button>
    </div>
  );
}
