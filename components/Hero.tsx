import HeroWave from '@/components/HeroWave';
import heroContent from '@/json/hero.json';

export default function Hero() {
  return (
    <section>
      <div className="content bg-skyblue h-52">
        <div className="container mx-auto flex flex-col py-8 text-center text-white">
          <h1 className="text-3xl">{heroContent.home.main} </h1>
          <h6 className="text-lg">{heroContent.home.info}</h6>
          
        </div>
      </div>
      <HeroWave />
    </section>
  );
}
