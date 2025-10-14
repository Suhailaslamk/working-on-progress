import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center text-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl text-white px-6"
        >
          <h1 className="text-5xl font-[Cinzel] mb-4 tracking-widest">About Daor</h1>
          <p className="text-lg leading-relaxed">
            Where timeless design meets modern sophistication.
          </p>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-[Cinzel] mb-6 tracking-widest">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">Daor</span>, we believe in creating more than
            just fashion — we create experiences. Our goal is to redefine elegance by
            merging classic craftsmanship with a modern edge, ensuring every piece tells
            a story of confidence, sustainability, and innovation.
          </p>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury fashion"
              className="rounded-3xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-[Cinzel] mb-6 tracking-widest">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Daor began as a passion project — a vision to bring luxury within reach,
              while keeping ethical fashion at the forefront. Inspired by European
              minimalism and bold modern aesthetics, every design reflects the pursuit
              of balance between elegance and innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From our first atelier to global recognition, our commitment has remained
              the same: to celebrate individuality, craftsmanship, and timeless style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f6]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-[Cinzel] mb-12 tracking-widest">Meet the Team</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Ava Loren",
                role: "Creative Director",
                img: "https://randomuser.me/api/portraits/women/32.jpg",
              },
              {
                name: "Noah Jensen",
                role: "Head of Design",
                img: "https://randomuser.me/api/portraits/men/35.jpg",
              },
              {
                name: "Liam Carter",
                role: "Brand Strategist",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer Quote */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <p className="text-lg italic font-light">
          “Elegance is when the inside is as beautiful as the outside.” – Coco Chanel
        </p>
      </footer>
    </div>
  );
}
