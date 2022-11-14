import Logo from '@/components/Logo';
import Nav from '@/components/Nav';

export default function Header() {
  return (
    <header className="mx-auto flex w-full items-center justify-between bg-gray-200 bg-white py-4">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
