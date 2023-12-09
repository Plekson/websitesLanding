import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Profile from "./components/Profile/Profile";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Testimonials />
      </section>
    </main>
  );
}
