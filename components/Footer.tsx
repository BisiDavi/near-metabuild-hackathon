export default function Footer() {
  return (
    <footer className="footer flex h-14 w-full items-center bg-black text-white">
      <div className="content container mx-auto flex justify-between text-sm">
        <p>Copyright © 2022</p>
        <div>
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