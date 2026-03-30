import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold mb-2">संस्कार कन्स्ट्रक्शन</h3>
          <p className="text-sm text-primary-foreground/70 mb-4">
            Building Trust, Creating Strong Foundations
          </p>
          <p className="text-sm text-primary-foreground/60">
            चिखली, पुणे येथील विश्वासार्ह बांधकाम कंपनी. गुणवत्तापूर्ण काम आणि वेळेवर डिलिव्हरी हे आमचे वैशिष्ट्य.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-secondary">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-secondary" />
              <a href="tel:+918888919715" className="hover:text-secondary transition-colors">
                +91 8888919715
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
              <span className="text-primary-foreground/70">Chikhali, Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-secondary" />
              <span className="text-primary-foreground/70">info@sanskarconstruction.com</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Sanskar Construction. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
