"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Shield, Leaf, Thermometer, Truck, ChevronRight, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Section component with scroll reveal
function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  )
}

// Navigation
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#probleme", label: "Problème" },
    { href: "#modules", label: "Modules" },
    { href: "#stack", label: "Stack" },
    { href: "#equipe", label: "Equipe" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Truck<span className="text-primary">Net</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">Nous Contacter</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">Nous Contacter</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  const stats = [
    { value: "3", label: "Modules" },
    { value: "5", label: "Fondateurs" },
    { value: "MAD", label: "Pricing" },
    { value: "2026", label: "Lancement" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 240, 232, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 240, 232, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(232, 93, 37, 0.15) 0%, transparent 70%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <RevealSection>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              B2B SaaS - Transport Routier
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {"L'intelligence au coeur du transport routier "}
              <span className="text-primary">au Monde</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Solution complete de gestion de flottes pour les entreprises de 5 a 80 vehicules.
              sécurité, conformité ESG et chaine du froid en temps réel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#modules">
                  Découvrir les Modules
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                <a href="#equipe">Rencontrer notre Equipe</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: Shield,
      title: "Angles Morts",
      description: "Les accidents dus aux angles morts représentent 30% des sinistres de flottes. Aucune solution abordable sur le marché marocain."
    },
    {
      icon: Leaf,
      title: "conformité ESG Absente",
      description: "Les PME de transport n'ont pas les outils pour genérer des rapports ESG conformes aux normes ISO 26000 et CSRD."
    },
    {
      icon: Thermometer,
      title: "Chaine du Froid Aveugle",
      description: "Les transporteurs frigorifiques perdent 15% de leur cargaison par manque de monitoring température en temps réel."
    }
  ]

  return (
    <section id="probleme" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Le Problème</Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Les défis du transport routier au Maroc
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les flottes marocaines font face a des problèmes critiques sans solutions locales adaptées.
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <RevealSection key={problem.title}>
              <Card
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <problem.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Modules Section
function ModulesSection() {
  const modules = [
    {
      icon: Shield,
      name: "SafeDetect",
      category: "sécurité",
      description: "Détection des angles morts par vision IA et radar",
      specs: [
        "YOLOv8 + HLK-LD2450 radar",
        "Raspberry Pi 4",
        "Arducam 180 degres",
        "1800-2200 MAD/vehicule"
      ],
      partnership: "Partenariat Wafa Assurance / AXA Maroc"
    },
    {
      icon: Leaf,
      name: "TruckNet Core",
      category: "ESG",
      description: "Rapports ESG automatiques conformes aux normes internationales",
      specs: [
        "LLM Agents pour analyse",
        "ISO 26000 / CSRD",
        "Rapport DG mensuel auto",
        "Dashboard executif"
      ],
      partnership: "conformité réglementaire garantie"
    },
    {
      icon: Thermometer,
      name: "ColdChain",
      category: "IoT",
      description: "Monitoring température et chocs en temps réel",
      specs: [
        "DHT11 + MPU6050 sensors",
        "Kafka vers InfluxDB",
        "Alertes temps réel",
        "Historique complet"
      ],
      partnership: "Zero perte de cargaison"
    }
  ]

  return (
    <section id="modules" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Nos Modules</Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Une solution complète et modulaire
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez les modules adaptés à vos besoins. Intégration transparente et support local.
            </p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <RevealSection key={module.name}>
              <Card
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                        {module.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">{module.category}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {module.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {module.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-primary font-medium">{module.partnership}</p>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stack Section
function StackSection() {
  const techStack = [
    { category: "Hardware", items: ["ESP32", "Raspberry Pi 4", "HLK-LD2450", "Arducam", "DHT11", "MPU6050"] },
    { category: "IA & Data", items: ["YOLOv8", "LLM Agents", "Kafka", "InfluxDB", "PostgreSQL"] },
    { category: "Backend", items: ["FastAPI", "Python", "AWS eu-west-1"] },
    { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS"] }
  ]

  return (
    <section id="stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Tech Stack</Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Technologies de pointe marocain
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une architecture moderne, scalable et sécurisée pour les flottes de demain.
            </p>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((stack, index) => (
            <RevealSection key={stack.category}>
              <div style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="bg-card border-border hover:border-primary/50 transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
function TeamSection() {
  const team = [
    { name: "Amoura Kenza", role: "Big Data & IA", initials: "AK", isCoFounder: true },
    { name: "Ayman Allouch", role: "Backend Senior, Cloud & Infra", initials: "AA", isFounder: true },
    { name: "Ouissal Nari", role: "Big Data & IA", initials: "ON", isCoFounder: true },
    { name: "Adam El-Araqy", role: "Systemes embarques & IoT", initials: "AE", isCoFoundere: true },
    { name: "Abdelmajid Chantr", role: "Systemes embarques & IoT", initials: "AC", isCoFoundere: true },
  ]

  return (
    <section id="equipe" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Notre Equipe</Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Les fondateurs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une equipe pluridisciplinaire issue de {"l'Ecole Polytechnique d'Agadir - Universiapolis"}
            </p>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <RevealSection key={member.name}>
              <Card
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name}
                  </h3>
                  {member.isCoFounder && (
                    <Badge variant="secondary" className="mb-2 text-xs">Co-fondatrice</Badge>
                  )}
                  {member.isCoFoundere && (
                    <Badge variant="secondary" className="mb-2 text-xs">Co-fondateur</Badge>
                  )}
                  {member.isFounder && (
                    <Badge variant="secondary" className="mb-2 text-xs">Fondateur</Badge>
                  )}
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Contact</Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {"Pret a transformer votre flotte ?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour une démonstration personnalisée et un devis adapté a vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="mailto:contact@trucknet.ma">
                  <Mail className="mr-2 h-4 w-4" />
                  contact@trucknet.ma
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                <a href="https://akmeonuzraa.github.io/TruckNet/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Truck<span className="text-primary">Net</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            2026 TruckNet Agadir. Tous droits reservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Modules
            </a>
            <a href="#equipe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Equipe
            </a>
            <a href="https://github.com/trucknet-ma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function TruckNetLanding() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ModulesSection />
      <StackSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
