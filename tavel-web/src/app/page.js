import EasyandFast from "./components/screens/EasyandFast";
import Testimonials from "./components/screens/Testimonials";
import Category from "./components/screens/catagory";
import Home1 from "./components/screens/home";
import TopSelling from "./components/screens/topSelling";

export default function Home() {
  return (
    <main>
      <section>
      <Home1 />
      <Category />
      <TopSelling />
      <EasyandFast />
      <Testimonials />
      </section>
    </main>
  );
}
