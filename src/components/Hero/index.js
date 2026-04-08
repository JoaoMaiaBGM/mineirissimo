import Image from 'next/image';

import heroImage from '../../assets/images/hero.jpg';



export function Hero() {
  return (
    <section className="relative w-full h-[90svh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Uma cesta de pão de queijo"
        width={1000}
        height={1000}
        className="relative w-full h-full object-cover"
      />
      <div className="absolute container text-center">
        <h1 className="text-primary mb-4">
          O Sabor de Minas <br />
          em Recife
        </h1>
        <p className="text-base text-foreground mb-8">Produtos artesanais sem glúten desde 2010</p>
        <button className="btn-primary">Fazer Pedido Agora</button>
      </div>
    </section>
  );
}
