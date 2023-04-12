export default function Footer() {
  return (
    <footer className="footer flex py-8 pb-8 w-full items-center bg-black text-white">
      <div className="content flex-col container mx-auto flex justify-between px-2 lg:px-0 text-sm lg:flex-row">
        <p className="text-center lg:text-base text-xs my-2">Copyright © 2022</p>
        <div className="lg:text-base text-xs text-center">
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
