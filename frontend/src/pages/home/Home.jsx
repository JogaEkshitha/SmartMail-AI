import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import HeroSection from "../../components/landing/HeroSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import WorkflowSection from "../../components/landing/WorkflowSection";
import PreviewSection from "../../components/landing/PreviewSection";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Header />

      <main>

        <HeroSection />

        <section id="features">
          <FeaturesSection />
        </section>

        <WorkflowSection />

        <PreviewSection />

      </main>

      <Footer />

    </div>
  );
}

export default Home;