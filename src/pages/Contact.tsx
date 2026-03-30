import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in Name and Phone number.");
      return;
    }
    toast.success("Message sent successfully! We will contact you soon. धन्यवाद!");
    setForm({ name: "", phone: "", location: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">संपर्क करा</h1>
          <p className="text-secondary text-lg mt-2">Contact Us</p>
        </div>
      </section>

      <section className="section-padding bg-blueprint">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a message / संदेश पाठवा</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name / तुमचे नाव *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  required
                />
                <Input
                  placeholder="Phone Number / फोन नंबर *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={15}
                  required
                />
                <Input
                  placeholder="Location / ठिकाण"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  maxLength={200}
                />
                <Textarea
                  placeholder="Message / संदेश"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base">
                  Submit / पाठवा
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+918888919715" className="text-primary hover:underline">+91 8888919715</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918888919715"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-foreground/70">Chikhali, Pune, Maharashtra, India</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-foreground/70">info@sanskarconstruction.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-80">
                <iframe
                  title="Sanskar Construction Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30240.55!2d73.79!3d18.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e4e4e4e4e5%3A0x0!2sChikhali%2C%20Pune!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
