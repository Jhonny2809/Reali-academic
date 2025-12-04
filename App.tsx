import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Benefits } from './components/Benefits';
import { ProductDetails } from './components/ProductDetails';
import { Audience } from './components/Audience';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { UrgencyFooter } from './components/UrgencyFooter';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <PainPoints />
      <Benefits />
      <ProductDetails />
      <Audience />
      <Testimonials />
      <HowItWorks />
      <UrgencyFooter />
      <FloatingWhatsapp />
    </main>
  );
}