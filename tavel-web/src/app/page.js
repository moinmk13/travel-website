import EasyandFast from "./components/screens/EasyandFast";
import Subscribe from "./components/screens/Subscribe";
import Testimonials from "./components/screens/Testimonials";
import Category from "./components/screens/catagory";
import Footer from "./components/screens/footer";
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
      <Subscribe />
      <Footer />
      </section>
    </main>
  );
}
