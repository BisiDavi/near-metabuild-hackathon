import Logo from '@/components/Logo';
import Nav from '@/components/Nav';

export default function Header() {
  return (
    <header className="w-full bg-white px-10">
      <Logo />
      <Nav />
    </header>
  );
}
