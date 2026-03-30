import Layout from "@/components/Layout";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import rowhouseImg from "@/assets/service-rowhouse.jpg";
import bungalowImg from "@/assets/service-bungalow.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import plasterImg from "@/assets/service-plaster.jpg";

const services = [
  {
    img: rowhouseImg,
    title: "रो हाऊस कन्स्ट्रक्शन",
    sub: "Row House Construction",
    desc: "आम्ही आधुनिक डिझाइन आणि मजबूत बांधकामासह रो हाऊस बांधतो. प्रत्येक रो हाऊस उत्कृष्ट गुणवत्तेच्या साहित्याने तयार केले जाते.",
    descEn: "We build modern row houses with strong foundations, contemporary design, and premium quality materials. Every unit is crafted for durability and comfort.",
    benefits: ["आधुनिक डिझाइन", "मजबूत पाया", "वेळेवर पूर्ण", "परवडणारी किंमत"],
  },
  {
    img: bungalowImg,
    title: "बंगला कन्स्ट्रक्शन",
    sub: "Bungalow Construction",
    desc: "तुमच्या स्वप्नातील बंगला बांधण्यासाठी आम्ही तयार आहोत. कस्टम डिझाइन, प्रीमियम फिनिशिंग आणि संपूर्ण प्रोजेक्ट मॅनेजमेंट.",
    descEn: "Build your dream bungalow with custom designs, premium finishing, and complete project management from foundation to handover.",
    benefits: ["कस्टम डिझाइन", "प्रीमियम फिनिशिंग", "संपूर्ण व्यवस्थापन", "लँडस्केपिंग"],
  },
  {
    img: renovationImg,
    title: "नूतनीकरणाची कामे",
    sub: "Renovation Work",
    desc: "जुन्या इमारतींचे नूतनीकरण करून त्यांना नवीन आधुनिक स्वरूप द्या. किचन, बाथरूम, लिव्हिंग रूम - सर्व प्रकारचे रिनोव्हेशन.",
    descEn: "Transform old structures into modern spaces. We handle kitchen, bathroom, living room, and complete home renovations.",
    benefits: ["आधुनिक स्वरूप", "किचन रिनोव्हेशन", "बाथरूम अपग्रेड", "फ्लोरिंग"],
  },
  {
    img: plasterImg,
    title: "प्लास्टर व टाइल्सची कामे",
    sub: "Plaster & Tile Work",
    desc: "व्यावसायिक प्लास्टर आणि टाइल्सचे काम. बाथरूम, किचन, फ्लोरिंग - सर्व प्रकारच्या टाइल्सचे काम उपलब्ध.",
    descEn: "Professional plastering and tiling services for bathrooms, kitchens, flooring, and wall cladding with premium materials.",
    benefits: ["व्यावसायिक काम", "प्रीमियम टाइल्स", "अचूक फिटिंग", "टिकाऊ फिनिश"],
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">आमच्या सेवा</h1>
        <p className="text-secondary text-lg mt-2">Our Services</p>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-blueprint">
      <div className="container mx-auto space-y-16">
        {services.map((s, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img src={s.img} alt={s.sub} loading="lazy" width={800} height={600} className="rounded-lg shadow-lg w-full h-80 object-cover" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-1">{s.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{s.sub}</p>
              <p className="text-foreground/70 mb-2">{s.desc}</p>
              <p className="text-foreground/60 text-sm mb-6">{s.descEn}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {s.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <QuoteFormDialog>
                  <Button variant="secondary" className="font-bold">Get Quote</Button>
                </QuoteFormDialog>
                <a href="tel:+918888919715">
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
