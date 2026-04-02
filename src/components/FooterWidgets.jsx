import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const FooterWidgets = () => {
  const location = useLocation();
  const [distance, setDistance] = useState(null);
  const [visitorCity, setVisitorCity] = useState("");
  const [loading, setLoading] = useState(true);

  // Constants for Ghaziabad, India
  const GHAZIABAD_LAT = 28.6692;
  const GHAZIABAD_LON = 77.4538;

  // Haversine formula to calculate distance in KM
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        if (data.latitude && data.longitude) {
          const dist = calculateDistance(data.latitude, data.longitude, GHAZIABAD_LAT, GHAZIABAD_LON);
          setDistance(dist);
          setVisitorCity(data.city || "Earth");
        }
      } catch (err) {
        console.error('Failed to fetch location data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (location.pathname === '/contact') return null;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-20 border-t border-white/5 bg-pure-black">
      {/* Header Area */}
      <div className="text-center mb-16">
        <span className="text-gray-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
          Beyond the Terminal
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Writing logic <span className="text-gradient italic font-serif">|| catching vibes</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Github Card */}
        <motion.a
          href="https://github.com/Dhruvh-maker"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0C0C0C] rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full cursor-pointer group"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaGithub size={24} className="text-white" />
              <span className="text-lg font-bold text-white italic font-serif">Dhruvh's GitHub</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Latest Commit</span>
              <span className="text-[10px] font-mono bg-[#111] border border-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Today
              </span>
            </div>

            <p className="text-white font-medium text-lg leading-snug mb-2">
              "feat: optimize realtime cache mapping for Solo AI feed..."
            </p>
            <p className="text-gray-500 text-sm font-mono mt-4">
              Repo: <span className="text-[#ff007f]">Solo-AI-Mobile</span>
            </p>
          </div>

          <div className="flex gap-4 mt-8 opacity-40 grayscale">
            <FaGithub size={20} />
            <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
            <div className="w-5 h-5 bg-white/20 rounded-full"></div>
          </div>
        </motion.a>

        {/* Guestbook/Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0C0C0C] rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff007f]/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#ff007f]/10 transition-all"></div>

          <div className="relative z-10">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6 block">Network</span>

            <h3 className="text-3xl font-black text-white mb-2 leading-tight">
              Leave your <br />
              <span className="text-gradient italic font-serif text-4xl">footprint</span>
            </h3>

            <p className="text-gray-400 mt-6 text-sm">
              Drop a quick message or just say hi.
            </p>
          </div>

          <div className="flex items-center justify-between mt-10 relative z-10">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?img=11" alt="visitor" className="w-8 h-8 rounded-full border-2 border-[#0C0C0C]" />
              <img src="https://i.pravatar.cc/150?img=33" alt="visitor" className="w-8 h-8 rounded-full border-2 border-[#0C0C0C]" />
              <img src="https://i.pravatar.cc/150?img=68" alt="visitor" className="w-8 h-8 rounded-full border-2 border-[#0C0C0C]" />
            </div>

            <Link to="/guestbook" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all">
              Say Hello <FaArrowRight size={12} className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Global Pulse Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#0C0C0C] rounded-3xl border border-white/5 overflow-hidden flex flex-col hover:border-white/10 transition-all h-full relative group"
        >
          <div className="p-8 relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaMapMarkerAlt size={20} className="text-[#ff007f]" />
                <span className="text-lg font-bold text-white tracking-tight uppercase text-xs font-mono">Global Pulse</span>
              </div>

              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="space-y-2 mt-4"
                  >
                    <div className="h-4 w-32 bg-white/5 rounded-full animate-pulse"></div>
                    <div className="h-6 w-48 bg-white/10 rounded-full animate-pulse"></div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="data"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="space-y-1 mt-4"
                  >
                    <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">Connecting from {visitorCity}</p>
                    <h4 className="text-white text-2xl font-black tracking-tight leading-none">
                      {distance ? `${distance.toLocaleString()} km` : "Somewhere on Earth"}
                    </h4>
                    <p className="text-gray-400 text-xs font-medium mt-2 leading-relaxed opacity-60">
                      away from Dhruv's Studio in Ghaziabad, India.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Radar Pulse Animation */}
            <div className="mt-8 relative flex items-center justify-center h-24 overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="absolute w-2 h-2 bg-[#ff007f] rounded-full z-20 shadow-[0_0_15px_rgba(255,0,127,0.8)]"></div>

              {/* Pulsing Rings */}
              <motion.div
                animate={{ scale: [1, 4], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                className="absolute w-12 h-12 border border-[#ff007f]/40 rounded-full z-10"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 4], opacity: [0.3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.6 }}
                className="absolute w-12 h-12 border border-[#ff007f]/20 rounded-full z-10"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 4], opacity: [0.1, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 1.2 }}
                className="absolute w-12 h-12 border border-[#ff007f]/10 rounded-full z-10"
              ></motion.div>

              {/* Background Radar Lines */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[1px] h-full bg-white"></div>
                <div className="h-[1px] w-full bg-white absolute"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FooterWidgets;
