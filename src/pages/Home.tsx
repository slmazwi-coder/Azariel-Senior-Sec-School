import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Megaphone, ArrowRight, BookOpen, UsersRound, FlaskConical, Trophy } from 'lucide-react';

const stats = [
  { label: 'Matric Pass Rate 2024', value: '87.1%', icon: TrendingUp },
  { label: 'Grades Offered', value: '8-12', icon: Users },
  { label: 'No-Fee Public School', value: 'Free', icon: Award },
];

// Pass rate data for the banner
const passRateData = {
  rate: '87.1%',
  year: '2024',
  description: 'Matric Pass Rate',
};

export const Home = () => {
  return (
    <div className="flex flex-col">

      {/* Pass Rate Banner */}
      <section 
        className="py-16 sm:py-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D3F6E 0%, #1F6FA5 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Celebrating Excellence
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {passRateData.description}
          </h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-6xl sm:text-8xl font-extrabold mb-2"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#C9A227',
                lineHeight: 1,
              }}
            >
              {passRateData.rate}
            </p>
          </motion.div>
          <p className="text-lg font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Class of {passRateData.year}
          </p>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            We're extremely proud of our learners and educators! 🏆
          </p>
        </div>
      </section>

      {/* Notices */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-[#4EA8DE] bg-[#EBF5FC] p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-[#4EA8DE] text-[#0D3F6E] shrink-0">
                <Megaphone size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-[#0D3F6E]">Notice</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-[#4EA8DE] text-gray-700">
                    2026
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">Admissions applications are now open</h3>
                <p className="text-gray-700 mt-1">
                  Grade 8-12 applications for the <span className="font-bold">2026</span> academic year are open. Limited spaces — apply early!
                </p>
                <a href="/admissions" className="mt-4 inline-flex items-center gap-2 text-[#0D3F6E] font-bold">
                  Apply now <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-gray-200 text-[#0D3F6E] shrink-0">
                <Trophy size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-[#0D3F6E]">Achievement</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-700">
                    2024
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">Matric Class of 2024 Achieves 87.1% Pass Rate</h3>
                <p className="text-gray-700 mt-1">
                  Our Grade 12 class achieved an outstanding result, a testament to hard work, dedication, and community support.
                </p>
                <a href="/achievements" className="mt-4 inline-flex items-center gap-2 text-[#0D3F6E] font-bold">
                  View achievements <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="py-12 bg-gray-50 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-b-4 border-[#4EA8DE]"
            >
              <div className="p-4 bg-[#EBF5FC] rounded-xl text-[#0D3F6E]">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / Key Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D3F6E] mb-3">Why Choose Azariel SSS?</h2>
            <div className="w-16 h-1 bg-[#4EA8DE] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F4FAFF] p-6 rounded-2xl border border-[#4EA8DE]/20"
            >
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-[#0D3F6E] mb-2">Strong Academics</h3>
              <p className="text-gray-600 text-sm">Mathematics, Sciences, Business Studies, Humanities & more</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F4FAFF] p-6 rounded-2xl border border-[#4EA8DE]/20"
            >
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-[#0D3F6E] mb-2">Science Lab</h3>
              <p className="text-gray-600 text-sm">Fully equipped laboratory for practical experiments</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F4FAFF] p-6 rounded-2xl border border-[#4EA8DE]/20"
            >
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-[#0D3F6E] mb-2">No-Fee School</h3>
              <p className="text-gray-600 text-sm">Accessible quality education for all qualifying learners</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#F4FAFF] p-6 rounded-2xl border border-[#4EA8DE]/20"
            >
              <div className="text-4xl mb-3">🦅</div>
              <h3 className="text-lg font-bold text-[#0D3F6E] mb-2">"Soar Like an Eagle"</h3>
              <p className="text-gray-600 text-sm">Our motto — every learner can rise above and achieve greatness</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0D3F6E] mb-4">About Our School</h2>
              <div className="w-16 h-1 bg-[#4EA8DE] mb-6 rounded-full" />
              <div className="space-y-4 text-gray-600">
                <p>
                  Azariel Senior Secondary School is a public secondary school located in <strong className="text-[#1F6FA5]">Matatiele, Eastern Cape, 4730</strong>, proudly serving learners in the <strong className="text-[#1F6FA5]">Alfred Nzo West Education District</strong>.
                </p>
                <p>
                  We offer quality education for learners in <strong className="text-[#1F6FA5]">Grades 8 through 12</strong>. As a <strong className="text-[#1F6FA5]">No-Fee Public School</strong>, we are accessible to all qualifying learners in our district.
                </p>
                <p>
                  Our dedicated educators work tirelessly to ensure every learner reaches their full potential, guided by our motto: <em className="text-[#0D3F6E] font-semibold">"Soar Like an Eagle."</em>
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#4EA8DE]/20">
              <h3 className="text-xl font-bold text-[#0D3F6E] mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Matatiele, Eastern Cape, 4730</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏫</span>
                  <div>
                    <p className="font-semibold text-gray-800">District</p>
                    <p className="text-gray-600">Alfred Nzo West Education District</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Grades</p>
                    <p className="text-gray-600">Grade 8 through Grade 12</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="font-semibold text-gray-800">Fee Status</p>
                    <p className="text-gray-600">No-Fee Public School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0D3F6E] mb-4">Our Motto</h2>
          <div className="w-16 h-1 bg-[#4EA8DE] mx-auto mb-8 rounded-full" />
          <p className="text-3xl text-gray-700 leading-relaxed font-light italic">
            "Soar Like an Eagle"
          </p>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We believe every learner has the capacity to rise above their circumstances and achieve great things. Our role is to provide the guidance, support, and opportunities for each student to reach their highest potential.
          </p>
        </div>
      </section>
    </div>
  );
};
