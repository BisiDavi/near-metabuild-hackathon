export default function Footer() {
  return (
    <footer className="footer flex lg:h-14 py-4 pb-8 w-full items-center bg-black text-white">
      <div className="content flex-col container mx-auto flex justify-between text-sm lg:flex-row">
        <p className="text-center text-xs my-2">Copyright © 2022</p>
        <div className="text-xs text-center">
          Built with ❤️ for{' '}
          <a
            href="https://metabuild.devpost.com"
            rel="noreferrer"
            className="hover:text-red-500"
            target="_blank"
          >
            NEAR METABUILD HACKATHON 3 (2022)
          </a>
        </div>
      </div>
    </footer>
  );
}
