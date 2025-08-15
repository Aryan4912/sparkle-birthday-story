import HeroSection from "@/components/HeroSection";
import CakeSection from "@/components/CakeSection";
import MemoryGallery from "@/components/MemoryGallery";
import QuoteSection from "@/components/QuoteSection";
import LetterSection from "@/components/LetterSection";
import ThankYouSection from "@/components/ThankYouSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CakeSection />
      <MemoryGallery />
      <QuoteSection />
      <LetterSection />
      <ThankYouSection />
    </div>
  );
};

export default Index;
