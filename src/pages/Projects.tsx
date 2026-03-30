import { useState } from "react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import rowhouseImg from "@/assets/service-rowhouse.jpg";
import bungalowImg from "@/assets/service-bungalow.jpg";
import renovationImg from "@/assets/service-renovation.jpg";

const categories = ["All", "Residential", "Renovation", "Interior"];

const projects = [
  { img: project1, title: "Residential Complex, Chikhali", category: "Residential" },
  { img: project2, title: "Luxury Interior, Pimpri", category: "Interior" },
  { img: project3, title: "Row House Project, Moshi", category: "Residential" },
  { img: project4, title: "Kitchen Renovation, Wakad", category: "Renovation" },
  { img: project5, title: "Bungalow Project, Ravet", category: "Residential" },
  { img: project6, title: "Bathroom Finishing, Chikhali", category: "Interior" },
  { img: rowhouseImg, title: "Row House, Dehu Road", category: "Residential" },
  { img: bungalowImg, title: "Bungalow, Nigdi", category: "Residential" },
  { img: renovationImg, title: "Kitchen Remodel, Akurdi", category: "Renovation" },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">आमचे प्रोजेक्ट्स</h1>
          <p className="text-secondary text-lg mt-2">Our Projects / Gallery</p>
        </div>
      </section>

      <section className="section-padding bg-blueprint">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImg(p.img)}
              >
                <div className="relative overflow-hidden h-64">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-primary-foreground font-bold">{p.title}</p>
                      <p className="text-secondary text-sm">{p.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImg} onOpenChange={() => setSelectedImg(null)}>
        <DialogContent className="max-w-4xl p-2 bg-foreground/95">
          {selectedImg && (
            <img src={selectedImg} alt="Project" className="w-full h-auto rounded" />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projects;
