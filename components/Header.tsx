import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import useFirebase from '@/hooks/useFirebase';

export default function Header() {
  const { getAuthdetails } = useFirebase();
  const authDetails = getAuthdetails();
  console.log('authDetails', authDetails);

  return (
    <header className="bg-skyblue mx-auto flex w-full items-center justify-between border-b border-gray-400 bg-gray-200 bg-white py-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
