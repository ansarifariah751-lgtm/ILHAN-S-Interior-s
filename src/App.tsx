import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofStrip } from './components/ProofStrip';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostEstimator } from './components/CostEstimator';
import { MaterialPaletteExplorer } from './components/MaterialPaletteExplorer';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickActionBar } from './components/QuickActionBar';
import { BookingModal } from './components/BookingModal';
import { Project } from './types';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [estimateData, setEstimateData] = useState<{
    propertySize: string;
    propertyType: string;
    tier: string;
    estimatedWeeks: string;
    services: string[];
  } | null>(null);

  const handleOpenBooking = () => {
    setSelectedProject(null);
    setEstimateData(null);
    setBookingOpen(true);
  };

  const handleSelectProjectForBooking = (project: Project) => {
    setSelectedProject(project);
    setEstimateData(null);
    setBookingOpen(true);
  };

  const handleApplyEstimateToBooking = (estimate: {
    propertySize: string;
    propertyType: string;
    tier: string;
    estimatedWeeks: string;
    services: string[];
  }) => {
    setEstimateData(estimate);
    setSelectedProject(null);
    setBookingOpen(true);
  };

  const handleScrollToReviews = () => {
    const el = document.getElementById('reviews');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221E1A] flex flex-col selection:bg-[#745633]/20 selection:text-[#1A1612]">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Experience */}
      <main className="flex-1">
        {/* Parallax Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4-Item Proof Strip with 4.6 Google Rating */}
        <ProofStrip onOpenReviews={handleScrollToReviews} />

        {/* Portfolio Gallery with Minimalist Slider & Lightbox */}
        <PortfolioGallery onSelectProjectForBooking={handleSelectProjectForBooking} />

        {/* Before / After Spatial Transformation Dragger */}
        <BeforeAfterSlider />

        {/* Lahore Residential Scope & Cost Estimator */}
        <CostEstimator onApplyEstimateToBooking={handleApplyEstimateToBooking} />

        {/* Material & Finish Palette Moodboard Explorer */}
        <MaterialPaletteExplorer />

        {/* Google Reviews with 4.6 Star Rating & Real Lahore Reviews */}
        <GoogleReviewsSection />

        {/* Studio Location, Live Directions & Interactive Contact */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Action Bar (Responsive Mobile & Desktop) */}
      <QuickActionBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        prefilledProject={selectedProject}
        prefilledEstimate={estimateData}
      />
    </div>
  );
}
