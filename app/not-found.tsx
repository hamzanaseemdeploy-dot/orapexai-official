import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-md">
        We could not find the page you are looking for. It might have been moved or does not exist.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
