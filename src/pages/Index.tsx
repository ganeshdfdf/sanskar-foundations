import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Users, IndianRupee, ChevronRight, Star, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import heroImg from "@/assets/hero-construction.jpg";
import rowhouseImg from "@/assets/service-rowhouse.jpg";
import bungalowImg from "@/assets/service-bungalow.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import plasterImg from "@/assets/service-plaster.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { useState } from "react";

const services = [
  { img: rowhouseImg, title: "रो हाऊस कन्स्ट्रक्शन", sub: "Row House Construction", desc: "आधुनिक डिझाइन आणि मजबूत बांधकामासह रो हाऊस बांधकाम." },
  { img: bungalowImg, title: "बंगला कन्स्ट्रक्शन", sub: "Bungalow Construction", desc: "तुमच्या स्वप्नातील बंगला, उत्तम गुणवत्तेसह." },
  { img: renovationImg, title: "नूतनीकरणाची कामे", sub: "Renovation Work", desc: "जुन्या इमारतीचे नूतनीकरण, आधुनिक स्वरूप." },
  { img: plasterImg, title: "प्लास्टर व टाइल्स", sub: "Plaster & Tiles Work", desc: "व्यावसायिक प्लास्टर आणि टाइल्सचे काम." },
];

const whyUs = [
  { icon: Shield, title: "गुणवत्तापूर्ण काम", sub: "Quality Work" },
  { icon: Users, title: "अनुभवी टीम", sub: "Experienced Team" },
  { icon: Clock, title: "वेळेवर डिलिव्हरी", sub: "On-Time Delivery" },
  { icon: IndianRupee, title: "परवडणारी किंमत", sub: "Affordable Pricing" },
];

const testimonials = [
  { name: "राजेश पाटील", text: "संस्कार कन्स्ट्रक्शनने आमचे घर अतिशय सुंदर बांधले. गुणवत्ता उत्कृष्ट आहे!", rating: 5 },
  { name: "सुनीता शिंदे", text: "वेळेवर काम पूर्ण झाले आणि किंमतही योग्य होती. खूप समाधानी आहे.", rating: 5 },
  { name: "अमित जोशी", text: "नूतनीकरणाचे काम अतिशय व्यावसायिकपणे केले. शिफारस करतो.", rating: 5 },
];

const faqs = [
  { q: "बांधकामाचा खर्च किती येतो?", a: "खर्च प्रोजेक्टच्या आकार आणि प्रकारावर अवलंबून असतो. कृपया फ्री कोटेशनसाठी आमच्याशी संपर्क साधा." },
  { q: "बांधकामाला किती वेळ लागतो?", a: "साधारणतः रो हाऊससाठी 6-8 महिने आणि बंगल्यासाठी 8-12 महिने लागतात." },
  { q: "कोणते मटेरियल वापरले जातात?", a: "आम्ही उत्तम दर्जाचे सिमेंट, स्टील, विटा आणि इतर बांधकाम साहित्य वापरतो." },
  { q: "कामाची गॅरंटी मिळते का?", a: "होय, आम्ही आमच्या सर्व बांधकामांवर गॅरंटी देतो." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sanskar Construction site" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              संस्कार कन्स्ट्रक्शन
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-2">
              सर्व प्रकारचे कन्स्ट्रक्शनचे कामे केली जातील
            </p>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8">
              Building Trust, Creating Strong Foundations — चिखली, पुणे
            </p>
            <div className="flex flex-wrap gap-4">
              <QuoteFormDialog>
                <Button size="lg" variant="secondary" className="font-bold text-base gap-2">
                  Get Free Quote
                </Button>
              </QuoteFormDialog>
              <a href="tel:+918888919715">
                <Button size="lg" variant="outline" className="font-bold text-base gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-blueprint">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">आमच्या सेवा</h2>
            <p className="text-muted-foreground">Our Services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className={`group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up-delay-${Math.min(i, 3)}`}>
                <div className="overflow-hidden h-48">
                  <img src={s.img} alt={s.sub} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary text-lg">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{s.sub}</p>
                  <p className="text-sm text-foreground/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="gap-2 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground text-center mb-12">
            आम्हाला का निवडावे?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground text-lg">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">आमचे प्रोजेक्ट्स</h2>
            <p className="text-muted-foreground">Our Completed Projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[project1, project2, project3].map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={img} alt={`Project ${i + 1}`} loading="lazy" width={800} height={600} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" className="gap-2 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Projects <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
            ग्राहकांचे अनुभव
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{t.text}"</p>
                <p className="font-bold text-primary">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
            <HelpCircle className="inline w-8 h-8 mr-2" />
            सामान्य प्रश्न / FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-lg shadow-sm border border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-primary"
                >
                  {faq.q}
                  <ChevronRight className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-foreground/70 text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground mb-4">
            Contact Now for Best Construction Deals!
          </h2>
          <p className="text-secondary-foreground/70 mb-6">आजच संपर्क साधा आणि मोफत कोटेशन मिळवा</p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteFormDialog>
              <Button size="lg" className="font-bold text-base">Get Free Quote</Button>
            </QuoteFormDialog>
            <a href="tel:+918888919715">
              <Button size="lg" variant="outline" className="font-bold text-base gap-2 border-foreground/30">
                <Phone className="w-5 h-5" /> +91 8888919715
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
