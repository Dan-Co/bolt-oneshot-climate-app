import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, BarChart3, BookOpen, Zap, TreePine, Droplets } from 'lucide-react';
import Globe from '../components/Globe';
import DataCard from '../components/DataCard';
import { globalClimateData } from '../data/climateData';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Climate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                {' '}Quest
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Race to Net Zero through interactive storytelling, immersive gameplay, 
              and AI-powered climate simulations. Your decisions shape the future of our planet.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/quest"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Your Quest</span>
              </Link>
              
              <Link
                to="/dashboard"
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:bg-white/20 flex items-center justify-center space-x-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span>View Data</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <Globe size={400} className="hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Climate Data Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Global Climate Snapshot
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring of climate indicators across critical regions worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalClimateData.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <DataCard
                  title={region.region}
                  value={region.temperature}
                  unit="°C above pre-industrial"
                  severity={region.riskLevel}
                  trend={region.temperature > 1.5 ? 'up' : 'stable'}
                  description={`CO₂: ${region.co2Level}ppm • Forest: ${region.forestCover}% • Renewable: ${region.renewableEnergy}%`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Experience Climate Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immersive tools that make climate science accessible and actionable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Interactive Simulations',
                description: 'Experience the consequences of policy decisions through advanced climate modeling and real-time feedback systems.',
                link: '/quest'
              },
              {
                icon: TreePine,
                title: 'Mini-Games',
                description: 'Build green cities, balance energy grids, and respond to climate disasters in engaging, educational gameplay.',
                link: '/quest'
              },
              {
                icon: Droplets,
                title: 'AI-Powered Stories',
                description: 'Co-create climate futures with AI, generating personalized narratives based on your choices and their outcomes.',
                link: '/story'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to={feature.link}
                  className="block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl group"
                >
                  <feature.icon className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              The Future is in Your Hands
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Every decision matters. Every action counts. Start your climate quest today 
              and discover how your choices can help humanity reach net zero emissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quest"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Begin Your Journey
              </Link>
              <Link
                to="/story"
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 hover:bg-white/20 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Create Your Story</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;