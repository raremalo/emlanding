"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Monitor, Users, Target, Lightbulb, Wifi, Camera, Mic } from "lucide-react";

export function CourseDetails() {
  console.log("CourseDetails component rendering");

  const courseInfo = [
    {
      icon: Calendar,
      title: "Startdatum",
      content: "21. August 2025",
      subtext: "Donnerstags"
    },
    {
      icon: Clock,
      title: "Zeit",
      content: "10:00 - 12:00 Uhr",
      subtext: "2 Stunden pro Termin"
    },
    {
      icon: Monitor,
      title: "Format",
      content: "Online per ZOOM",
      subtext: "Bequem von zuhause"
    },
    {
      icon: Users,
      title: "Termine",
      content: "6 Termine",
      subtext: "12 Wochen Kurs"
    }
  ];

  const technicalRequirements = [
    {
      icon: Wifi,
      title: "Stabile Internetverbindung",
      description: "Für reibungslose Videokonferenzen"
    },
    {
      icon: Monitor,
      title: "PC oder Laptop",
      description: "Handy oder Tablet sind nicht geeignet"
    },
    {
      icon: Camera,
      title: "Gute Videoqualität",
      description: "Dein Gesicht sollte gut sichtbar sein"
    },
    {
      icon: Mic,
      title: "Klarer Ton",
      description: "Damit du gut zu hören bist"
    }
  ];

  const courseGoals = [
    "Authentische Kommunikation im Hier und Jetzt",
    "Bewusste Wahrnehmung eigener Gefühle und Gedanken",
    "Aufbau tieferer, harmonischer Beziehungen",
    "Transformation einschränkender Glaubenssätze",
    "Integration von Achtsamkeit in den Alltag",
    "Sicherer Umgang mit ehrlichem Mitteilen"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-warm-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Kurs-Details
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Ein strukturierter Weg zu authentischer Kommunikation und tieferen menschlichen Verbindungen
          </p>
        </div>

        {/* Course Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseInfo.map((info, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-sage/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-3">
                <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-8 h-8 text-forest-green" />
                </div>
                <CardTitle className="text-lg text-forest-green">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-semibold text-warm-gray mb-1">{info.content}</p>
                <p className="text-sm text-warm-gray/70">{info.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Requirements */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-forest-green mb-3">
              Technische Voraussetzungen
            </h3>
            <p className="text-warm-gray">
              Für die optimale Teilnahme an den Online-Sessions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalRequirements.map((req, index) => (
              <Card key={index} className="bg-terracotta/5 border-terracotta/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <req.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <h4 className="font-semibold text-forest-green mb-2 text-sm">{req.title}</h4>
                  <p className="text-xs text-warm-gray leading-relaxed">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-golden/10 border border-golden/30 rounded-xl max-w-2xl mx-auto">
            <p className="text-center text-forest-green font-medium text-sm">
              📱 <strong>Wichtig:</strong> Eine Teilnahme mit Handy oder Tablet ist nicht möglich
            </p>
          </div>
        </div>

        {/* Course Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* What you'll learn */}
          <Card className="bg-white/90 backdrop-blur-sm border-sage/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-forest-green">
                <Lightbulb className="w-7 h-7 text-terracotta" />
                Das lernst du
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {courseGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-warm-gray leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* About the Method */}
          <Card className="bg-white/90 backdrop-blur-sm border-sage/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-forest-green">
                <Heart className="w-7 h-7 text-terracotta" />
                Über die Methode
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-warm-gray leading-relaxed">
                <strong className="text-forest-green">Ehrliches Mitteilen (EM)</strong> ist eine von Gopal Norbert Klein entwickelte Praxis für authentische Kommunikation.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Im Zentrum steht das Teilen von Gedanken, Gefühlen und Körperempfindungen im gegenwärtigen Moment – dem Hier und Jetzt.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Ziel ist es, harmonische Beziehungen durch aufrichtige und vollständige Kommunikation zu fördern und alte Glaubenssätze zu transformieren.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-forest-green italic max-w-4xl mx-auto">
            "Ehrliches Mitteilen führt zu mehr Verbindung, Freiheit und innerer Klarheit"
          </blockquote>
          <p className="text-terracotta font-medium mt-4">- Gopal Norbert Klein</p>
        </div>
      </div>
    </section>
  );
}

const Heart = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);