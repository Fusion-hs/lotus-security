export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
        Your business is already{" "}
        <span className="text-accent">vulnerable</span>
      </h1>

      <p className="mt-6 text-gray-300 max-w-xl">
        Data leaks don’t start with hackers. They start with simple mistakes.
        We find them before someone else does.
      </p>

      <button className="mt-8 bg-accent text-black px-6 py-3 rounded-lg w-fit">
        Get a Free Scan
      </button>
    </section>
  );
}