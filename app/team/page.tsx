import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const team = [
  {
    name: 'Chiheb Nouri',
    image: '/team/chiheb nouri.png',
  },
  {
    name: 'Ahmed Mazigh',
    image: '/team/ahmed mazigh.jpeg',
  },
  {
    name: 'Roua Khalfet',
    image: '/team/roua khalfet.jpeg',
  },
  {
    name: 'Yassine Kharrat',
    image: '/team/yassine kharrat.jpeg',
  },
  {
    name: 'Celia Marrakchi',
    image: '/team/celia marrakchi.jpeg',
  },
  {
    name: 'Youssef Ben Lallahom',
    image: '/team/youssef ben lallahom.png',
  },
  {
    name: 'Emna Masmoudi',
    image: '/team/emna masmoudi.jpeg',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The passionate people behind Nexaura, working to empower Tunisian entrepreneurs
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass rounded-3xl p-6 text-center hover:shadow-2xl transition-all group"
                >
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 group-hover:scale-110 transition-transform">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who are passionate about helping startups succeed
            </p>
            <a
              href="mailto:careers@nexaura.tn"
              className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
