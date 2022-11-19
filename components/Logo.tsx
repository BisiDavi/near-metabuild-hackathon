import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center border-2 border-white px-4 py-1 text-white hover:border-black hover:bg-black hover:text-white"
    >
      NEAR-RESUME
    </Link>
  );
}
