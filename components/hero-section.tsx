"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Heart } from "lucide-react";

export function HeroSection() {
  console.log("HeroSection component rendering");

  const scrollToBooking = () => {
    console.log("Scroll to booking clicked");
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDetails = () => {
    console.log("Scroll to details clicked");
    const detailsSection = document.getElementById('details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-warm-beige via-cream to-sage/10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
        style={{ backgroundImage: "url('/hero-background.png')" }}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-organic-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-terracotta/20 rounded-full animate-gentle-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-forest-green/20 rounded-full animate-gentle-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-golden/30 rounded-full animate-gentle-bounce" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-forest-green mb-6 leading-tight">
            Ehrliches Mitteilen
            <span className="block text-terracotta text-4xl md:text-5xl font-medium mt-2">
              für Anfänger
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-warm-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Entdecke authentische Kommunikation und baue tiefere, harmonische Beziehungen durch ehrliches Mitteilen im Hier und Jetzt.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-forest-green" />
              </div>
              <span className="text-sm font-medium text-warm-gray">6 Termine</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-terracotta" />
              </div>
              <span className="text-sm font-medium text-warm-gray">Je 2 Stunden</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-golden" />
              </div>
              <span className="text-sm font-medium text-warm-gray">Kleine Gruppe</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-forest-green" />
              </div>
              <span className="text-sm font-medium text-warm-gray">Für Anfänger</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-golden hover:bg-golden/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Jetzt anmelden
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToDetails}
              className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Mehr erfahren
            </Button>
          </div>
          
          {/* Early Bird Notice */}
          <div className="mt-8 p-4 bg-golden/10 border border-golden/30 rounded-xl max-w-md mx-auto">
            <p className="text-forest-green font-medium">
              🌱 Frühbucher-Preis bis 15.07.2025
            </p>
            <p className="text-sm text-warm-gray">
              Spare 20€ bei Anmeldung bis zum 15. Juli
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}