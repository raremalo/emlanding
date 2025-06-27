"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Star, Sparkles } from "lucide-react";

export function PricingSection() {
  console.log("PricingSection component rendering");
  
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  const earlyBirdDeadline = new Date('2025-07-15T23:59:59');

  useEffect(() => {
    console.log("Setting up early bird countdown timer");
    
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = earlyBirdDeadline.getTime() - now.getTime();
      
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeRemaining({ days, hours, minutes });
        console.log("Countdown updated:", { days, hours, minutes });
      } else {
        setTimeRemaining(null);
        console.log("Early bird offer expired");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    "6 strukturierte Termine à 2 Stunden",
    "Kleine Gruppengröße für intensive Betreuung",
    "Praktische Übungen und Reflexionen",
    "Einführung in die EM-Methode nach Gopal Klein",
    "Unterstützung bei ersten Kommunikationsversuchen",
    "Handouts und Übungsmaterialien"
  ];

  const handleBooking = () => {
    console.log("Booking button clicked");
    // Hier würde normalerweise eine Buchungslogik oder Link zu einem Buchungssystem stehen
    alert("Buchung wird implementiert - Kontakt über www.ehrlichesmitteilen.eu");
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-warm-beige to-sage/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Deine Investition
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Investiere in deine persönliche Entwicklung und authentische Kommunikation
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Early Bird Card */}
          {timeRemaining && (
            <Card className="bg-gradient-to-br from-golden/10 to-terracotta/10 border-golden/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-golden text-white px-4 py-2 rounded-bl-lg">
                <Sparkles className="w-4 h-4 inline mr-1" />
                Frühbucher
              </div>
              
              <CardHeader className="text-center pb-4">
                <Badge className="bg-golden text-white mx-auto mb-3 px-3 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Spare 20€
                </Badge>
                <CardTitle className="text-3xl text-forest-green">159€</CardTitle>
                <p className="text-lg text-warm-gray line-through">179€</p>
                <p className="text-sm text-terracotta font-medium">Frühbucher-Preis bis 15.07.2025</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Countdown */}
                <div className="bg-white/70 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-golden" />
                    <span className="font-medium text-forest-green">Angebot läuft ab in:</span>
                  </div>
                  <div className="flex justify-center gap-4 text-2xl font-bold text-terracotta">
                    <div className="text-center">
                      <div>{timeRemaining.days}</div>
                      <div className="text-xs text-warm-gray font-normal">Tage</div>
                    </div>
                    <div className="text-center">
                      <div>{timeRemaining.hours}</div>
                      <div className="text-xs text-warm-gray font-normal">Std</div>
                    </div>
                    <div className="text-center">
                      <div>{timeRemaining.minutes}</div>
                      <div className="text-xs text-warm-gray font-normal">Min</div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleBooking}
                  className="w-full bg-golden hover:bg-golden/90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Frühbucher-Preis sichern
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Regular Price Card */}
          <Card className="bg-white/90 backdrop-blur-sm border-sage/20">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl text-forest-green">179€</CardTitle>
              <p className="text-lg text-warm-gray">Regulärer Preis</p>
              <p className="text-sm text-warm-gray">Ab 16.07.2025</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Benefits List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-forest-green mb-3">Das ist enthalten:</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-warm-gray text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={handleBooking}
                variant="outline"
                className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Jetzt anmelden
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-white/80 rounded-xl p-6 border border-sage/20">
            <h4 className="font-semibold text-forest-green mb-3">Wichtige Informationen</h4>
            <div className="text-sm text-warm-gray space-y-2">
              <p><strong>Start:</strong> 21. August 2025, 10:00 Uhr</p>
              <p><strong>Termine:</strong> Donnerstags, 10:00-12:00 Uhr (6 Termine)</p>
              <p><strong>Format:</strong> Online per ZOOM</p>
              <p><strong>Benötigt:</strong> PC/Laptop, stabile Internetverbindung</p>
              <p><strong>Gruppengröße:</strong> Begrenzte Teilnehmerzahl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}