// components/Clients.js
export const Clients = () => {
  const clientLogos = [
    { src: "/client1.jpg", alt: "Client 1 Logo" },
    { src: "/client2.jpg", alt: "Client 2 Logo" },
    { src: "/client3.jpg", alt: "Client 3 Logo" },
    { src: "/client4.jpg", alt: "Client 4 Logo" },
    { src: "/client5.jpg", alt: "Client 5 Logo" },
  ];

  return (
    <section id="clients" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={client.src}
                alt={client.alt}
                className="h-16 sm:h-20 w-auto object-contain transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
