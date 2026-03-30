import Layout from "@/components/Layout";
import { Shield, Target, Eye, Award } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-64 md:h-80 flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="About Sanskar Construction" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">About Us</h1>
        <p className="text-secondary text-lg mt-2">आमच्याबद्दल</p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding bg-blueprint">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-primary mb-4">संस्कार कन्स्ट्रक्शन</h2>
            <p className="text-foreground/70 mb-4">
              संस्कार कन्स्ट्रक्शन ही चिखली, पुणे येथील एक विश्वासार्ह बांधकाम कंपनी आहे. आम्ही गेल्या अनेक वर्षांपासून 
              गुणवत्तापूर्ण बांधकाम सेवा प्रदान करत आहोत. रो हाऊस, बंगला, नूतनीकरण आणि प्लास्टर-टाइल्सचे काम 
              हे आमचे विशेष क्षेत्र आहे.
            </p>
            <p className="text-foreground/70">
              Sanskar Construction is a trusted construction company based in Chikhali, Pune. We specialize in 
              residential construction including row houses, bungalows, renovation, and finishing work. Our 
              commitment to quality, transparency, and on-time delivery sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "200+", label: "Projects Completed" },
              { num: "500+", label: "Happy Clients" },
              { num: "50+", label: "Skilled Workers" },
            ].map((s, i) => (
              <div key={i} className="bg-primary rounded-lg p-6 text-center">
                <div className="text-3xl font-extrabold text-secondary">{s.num}</div>
                <div className="text-primary-foreground/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission Vision */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-md border-l-4 border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-primary">आमचे ध्येय / Mission</h3>
            </div>
            <p className="text-foreground/70">
              प्रत्येक ग्राहकाला उत्कृष्ट गुणवत्तेचे, टिकाऊ आणि परवडणारे बांधकाम प्रदान करणे. 
              To deliver superior quality construction that stands the test of time, at prices that are fair and transparent.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-md border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">आमची दृष्टी / Vision</h3>
            </div>
            <p className="text-foreground/70">
              पुणे आणि आसपासच्या परिसरातील सर्वोत्तम बांधकाम कंपनी म्हणून ओळखले जाणे. 
              To be recognized as the most trusted and reliable construction company in Pune region.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-primary-foreground text-center mb-10">Trust Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Quality Assurance", desc: "गुणवत्ता हमी - प्रत्येक प्रोजेक्टमध्ये" },
            { icon: Award, title: "On-time Delivery", desc: "वेळेवर डिलिव्हरी - आमचे वचन" },
            { icon: Target, title: "Skilled Workers", desc: "कुशल कामगार - अनुभवी टीम" },
          ].map((b, i) => (
            <div key={i} className="text-center p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
              <b.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-2">{b.title}</h3>
              <p className="text-primary-foreground/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
