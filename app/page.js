import Navigation from "./components/navigation";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";

export default function Page() {
  return (
    <>
    <main>
      <Navigation/>
      <section className="MainSection">
      </section>
    </main>
    </>
  );
}
