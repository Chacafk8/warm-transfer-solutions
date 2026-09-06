import { Aurora, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy-900 pt-32">
      <Aurora />
      <div className="container-page relative py-20 text-center">
        <p className="font-serif text-7xl italic text-gradient sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          We could not find that page
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-navy-100/70">
          The page you are looking for may have moved. Let us point you back to
          somewhere useful.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" withArrow>
            Back to home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
