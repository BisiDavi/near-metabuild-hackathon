import Logo from '@/components/Logo';
import Nav from '@/components/Nav';

export default function Header() {


  return (
    <header className="bg-skyblue mx-auto flex w-full items-center justify-between border-b border-gray-400 bg-gray-200 bg-white py-4 text-white">
      <div className="container mx-auto flex justify-between px-4 lg:px-0">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
