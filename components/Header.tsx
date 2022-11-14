import Logo from '@/components/Logo';
import Nav from '@/components/Nav';

export default function Header() {
  return (
    <header className="bg-skyblue border-b border-gray-400 mx-auto flex w-full items-center justify-between bg-gray-200 bg-white py-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
