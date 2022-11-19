import Button from '@/components/Button';

export default function Overlay() {
  return (
    <div className="overlay absolute z-20 flex flex-col h-screen w-full items-center justify-center bg-gray-500 bg-opacity-80">
      <h4 className="z-40 text-center text-4xl font-bold text-white opacity-100">
        Please Login to continue
      </h4>
      <Button text="Login with Google" className='border px-4 rounded-full py-1 my-2' onClick={() => null} />
    </div>
  );
}
