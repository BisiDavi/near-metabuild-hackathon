import HeroWave from '@/components/HeroWave';
import heroContent from '@/json/hero.json';

export default function Hero() {
  return (
    <section>
      <div className="content bg-skyblue h-52">
        <div className="container mx-auto flex flex-col py-8 text-center text-white">
          <h1 className="text-3xl">{heroContent.home.main} </h1>
          <h6 className="text-lg">{heroContent.home.info}</h6>
          <button className="0 relative my-4 mx-auto flex w-auto rounded-md bg-white px-4 py-1.5 font-bold text-blue-500 hover:bg-gray-200">
            Get Started
            <span className="absolute -right-1.5 -top-1 inline-flex h-3  w-3 animate-ping rounded-full bg-red-500"></span>
            <span className="absolute -right-1.5 -top-1 inline-flex h-3 w-3 rounded-full bg-red-500"></span>
          </button>
        </div>
      </div>
      <HeroWave />
    </section>
  );
}
