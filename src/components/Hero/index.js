import { usePublicAssets } from 'lib/cms/usePublicAssets';
import Image from 'next/image';

export function Hero() {
  const { data } = usePublicAssets();
  const heroImage = data?.hero;

  return (
    <section className="relative w-full h-[90svh] flex flex-col items-center justify-center overflow-hidden xl:h-[95svh]">
      {heroImage?.url ? (
        <Image
          src={heroImage.url}
          alt={heroImage?.alt ?? 'Uma cesta de pão de queijo'}
          width={1600}
          height={900}
          priority
          className="relative w-full h-full object-cover"
        />
      ) : null}
      <div className="absolute max-w-2xl rounded-4xl text-center px-4 flex flex-col items-center justify-center md:px-16 md:backdrop-blur-[2px]">
        <h1 className="text-primary mb-4 text-shadow-[0_0_6px_rgba(255,255,255,0.9)] md:text-shadow-none">
          O legítimo sabor <br />
          do pão de queijo
        </h1>
        <p className="text-base text-foreground mb-8 text-shadow-[0_0_4px_rgba(255,255,255,0.6)]">Produtos artesanais sem glúten desde 2010</p>
        <button className="btn-primary">Fazer Pedido Agora</button>
      </div>
    </section>
  );
}
