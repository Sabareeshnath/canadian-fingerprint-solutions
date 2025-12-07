import { Fingerprint, Shield, Clock, Award, MapPin, Phone, Mail, ChevronRight, CheckCircle, Users, FileCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Background Check",
      description: "Comprehensive criminal record checks for employment, licensing, and personal verification."
    },
    {
      icon: Fingerprint,
      title: "Digital Fingerprinting",
      description: "RCMP accredited digital and ink roll fingerprinting services submitted electronically to RTID."
    },
    {
      icon: Globe,
      title: "FBI Clearance",
      description: "Complete FBI background check packages including fingerprinting and courier services."
    },
    {
      icon: FileCheck,
      title: "Record Suspension",
      description: "Full-service pardon applications with complete document handling and court report retrieval."
    },
    {
      icon: Users,
      title: "USA Entry Waiver",
      description: "Professional assistance with USA entry waiver applications for border crossing approval."
    },
    {
      icon: Award,
      title: "Foreign Police Check",
      description: "International police certificates from UAE, Dubai, and other countries worldwide."
    }
  ];

  const features = [
    { icon: Shield, text: "RCMP Accredited Agency" },
    { icon: Clock, text: "Same-Day Processing Available" },
    { icon: Award, text: "1 Year Free Repeat Service" },
    { icon: CheckCircle, text: "Full Refund Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
                <Fingerprint className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-display font-bold text-foreground">Fingerprints Plus</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">RCMP Accredited Agency</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button size="lg" className="hidden sm:flex">
              <Phone className="w-4 h-4 mr-1" />
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card">RCMP Accredited Agency</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-card mb-6 leading-tight animate-fade-up delay-100">
              Professional Fingerprinting Services Across Canada
            </h2>
            
            <p className="text-lg md:text-xl text-card/90 mb-8 leading-relaxed animate-fade-up delay-200">
              Welcome to Fingerprints Plus, your trusted partner for Immigration, Citizenship, Visa, Employment, and Government Security Clearance fingerprinting. We submit digital fingerprints electronically to RCMP for criminal record verification.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl">
                Get Started Today
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative maple leaf pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 text-center animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              Comprehensive Fingerprinting Solutions
            </h3>
            <p className="text-muted-foreground text-lg">
              We offer a complete range of fingerprinting and background check services for individuals living in Canada and abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold mt-4 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Trusted by Thousands of Canadians
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We live with you in your community and serve you as everyday friends. Our branches are open late into the evening and on weekends, so you don't have to take time off work. All branches offer free parking.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our Record Suspension and USA Entry Waiver services come with a full service fee refund guarantee. We handle all the work — court documents, local police reports — everything is done by us at one of the lowest prices in the country.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Same-Day Processing",
                  "Evening & Weekend Hours",
                  "Free Parking",
                  "Lowest Prices Guaranteed",
                  "1 Year Free Repeat Service",
                  "Multilingual Staff"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-on-scroll delay-200">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <Shield className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-foreground">RCMP Accredited</h4>
                    <p className="text-muted-foreground">Official Canadian Certification</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We submit digital fingerprints to RTID servers electronically. RCMP verifies the submitted fingerprints and biometric information with its National Repository of Criminal Records and issues certification.
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="text-center flex-1">
                    <div className="text-3xl font-display font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center flex-1">
                    <div className="text-3xl font-display font-bold text-primary">99%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center flex-1">
                    <div className="text-3xl font-display font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="font-bold">Full Refund</div>
                    <div className="text-sm opacity-90">Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-card rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-card mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg md:text-xl text-card/90 mb-8">
              Book your appointment today and experience professional, convenient, and best-priced fingerprinting services in Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button variant="heroOutline" size="xl">
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              Visit Our Location
            </h3>
            <p className="text-muted-foreground text-lg">
              We're conveniently located with extended hours and free parking for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: "Address", content: "123 Main Street\nToronto, ON M5V 2T6" },
              { icon: Phone, title: "Phone", content: "(416) 555-0123\nToll Free: 1-800-555-0123" },
              { icon: Clock, title: "Hours", content: "Mon-Fri: 9AM - 8PM\nSat-Sun: 10AM - 5PM" }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-muted border border-border animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                  <Fingerprint className="w-5 h-5 text-secondary" />
                </div>
                <h5 className="text-xl font-display font-bold">Fingerprints Plus</h5>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
                RCMP accredited agency providing professional fingerprinting and background check services across Canada for over 15 years.
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Services</h6>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-card transition-colors">Background Check</a></li>
                <li><a href="#" className="hover:text-card transition-colors">Digital Fingerprinting</a></li>
                <li><a href="#" className="hover:text-card transition-colors">FBI Clearance</a></li>
                <li><a href="#" className="hover:text-card transition-colors">Record Suspension</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-card transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-card transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-card transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-card transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Fingerprints Plus. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-secondary-foreground/70">
              <a href="#" className="hover:text-card transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-card transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
