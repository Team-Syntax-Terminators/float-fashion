import Category from "@/components/Home/Category";
import Feature from "@/components/Home/Feature";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Category />
      <Feature />
    </main>
  );
}
