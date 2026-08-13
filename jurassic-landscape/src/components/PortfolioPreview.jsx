import { useState } from "react";

export default function PortfolioPreview() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Desert Oasis Transformation",
      category: "Backyard Renovation",
      images: [
        "/images/PROJECTS FOR WEBSITE/PROJECT 1/IMG_0981.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 1/IMG_1423.png",
      ],
      thumbnail: "/images/PROJECTS FOR WEBSITE/PROJECT 1/IMG_0981.png",
    },
    {
      id: 2,
      title: "Modern Landscape Design",
      category: "Complete Yard Makeover",
      images: [
        "/images/PROJECTS FOR WEBSITE/PROJECT 2/IMG_0652.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 2/IMG_0804.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 2/IMG_0815.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 2/IMG_0894.png",
      ],
      thumbnail: "/images/PROJECTS FOR WEBSITE/PROJECT 2/IMG_0652.png",
    },
    {
      id: 3,
      title: "Backyard Paradise",
      category: "Before & After Transformation",
      beforeAfter: {
        before: [
          "/images/PROJECTS FOR WEBSITE/PROJECT 3/Before 1.png",
          "/images/PROJECTS FOR WEBSITE/PROJECT 3/Before 2.png",
        ],
        after: [
          "/images/PROJECTS FOR WEBSITE/PROJECT 3/After 1.png",
          "/images/PROJECTS FOR WEBSITE/PROJECT 3/After 2.png",
        ],
      },
      thumbnail: "/images/PROJECTS FOR WEBSITE/PROJECT 3/After 1.png",
    },
    {
      id: 4,
      title: "Modern Look Xeriscape",
      category: "Desert Landscape Design",
      images: ["/images/Modern Look.jpg"],
      thumbnail: "/images/Modern Look.jpg",
    },
    {
      id: 5,
      title: "Outdoor Kitchens",
      category: "Outdoor Living Spaces",
      images: [
        "/images/PROJECTS FOR WEBSITE/PROJECT 5/IMG_0807.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 5/IMG_2373.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 5/IMG_6180.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 5/IMG_9054.png",
      ],
      thumbnail: "/images/PROJECTS FOR WEBSITE/PROJECT 5/IMG_0807.png",
    },
    {
      id: 6,
      title: "Luxury Outdoor Living",
      category: "Premium Landscaping",
      images: [
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/DSCN0742.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_0674 copy.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_2986.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_5003.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_5012 copy.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_6073.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_7026.png",
      ],
      thumbnail: "/images/PROJECTS FOR WEBSITE/PROJECT 6/IMG_2986.png",
    },
    {
      id: 7,
      title: "Contemporary Yard Design",
      category: "Modern Landscaping",
      images: [
        "/images/PROJECTS FOR WEBSITE/PROJECT 7/IMG_7980.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 7/IMG_7981.png",
        "/images/PROJECTS FOR WEBSITE/PROJECT 7/IMG_8002 Large.png",
      ],
      thumbnail: "/images/PROJECTS FOR WEBSITE/PROJECT 7/IMG_7980.png",
    },
    {
      id: 8,
      title: "Backyard Paradise Renovation",
      category: "Complete Backyard Makeover",
      beforeAfter: {
        before: ["/images/Backyard Paradise Before.jpg"],
        after: ["/images/Backyard Paradise.jpg"],
      },
      thumbnail: "/images/Backyard Paradise.jpg",
    },
    {
      id: 9,
      title: "Elegant Entry",
      category: "Front Yard Design",
      beforeAfter: {
        before: ["/images/Elegant Entry Before.jpg"],
        after: ["/images/Elegant Entry.jpg"],
      },
      thumbnail: "/images/Elegant Entry.jpg",
    },
    {
      id: 10,
      title: "Luxury Landscape",
      category: "Resort-Style Living",
      beforeAfter: {
        before: ["/images/Luxury Landscape Before.jpeg"],
        after: ["/images/Luxury Landscape.jpeg"],
      },
      thumbnail: "/images/Luxury Landscape.jpeg",
    },
    {
      id: 11,
      title: "Natural SOD Oasis",
      category: "SOD Installation",
      beforeAfter: {
        before: ["/images/Natural SOD Oasis Before.jpg"],
        after: ["/images/Natural SOD Oasis.jpeg"],
      },
      thumbnail: "/images/Natural SOD Oasis.jpeg",
    },
    {
      id: 12,
      title: "Tranquil Water Feature",
      category: "Custom Water Features",
      beforeAfter: {
        before: ["/images/Tranquil Water Feature Before.jpeg"],
        after: ["/images/Tranquil Water Feature.jpeg"],
      },
      thumbnail: "/images/Tranquil Water Feature.jpeg",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "var(--gold)" }}
            >
              Our Work
            </span>
            <h2 className="font-display text-5xl mt-4 mb-6">
              Recent <span style={{ color: "var(--gold)" }}>Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of stunning landscape transformations across
              Queen Creek and the East Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(project)}
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="text-sm font-semibold tracking-wider uppercase mb-2"
                      style={{ color: "var(--gold)" }}
                    >
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-display text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full bg-zinc-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white text-4xl font-light hover:text-gold transition-colors"
            >
              &times;
            </button>

            <div className="p-8">
              <div className="mb-6">
                <p
                  className="text-sm font-semibold tracking-wider uppercase mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  {selectedProject.category}
                </p>
                <h2 className="text-4xl font-display text-white">
                  {selectedProject.title}
                </h2>
              </div>

              {selectedProject.beforeAfter ? (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-wider uppercase mb-3 text-gray-400">
                      BEFORE
                    </p>
                    <div className="space-y-4">
                      {selectedProject.beforeAfter.before.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Before ${idx + 1}`}
                          className="w-full rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold tracking-wider uppercase mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      AFTER
                    </p>
                    <div className="space-y-4">
                      {selectedProject.beforeAfter.after.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`After ${idx + 1}`}
                          className="w-full rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
