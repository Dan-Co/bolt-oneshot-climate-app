import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code, 
  Zap, 
  Globe, 
  Rocket, 
  Brain,
  Github,
  ExternalLink,
  Copy
} from 'lucide-react';

const About: React.FC = () => {
  const copyPrompt = () => {
    const promptText = `Build me a visually stunning, immersive, interactive climate simulation and storytelling app called "Climate Quest: Race to Net Zero". The app should combine: a dynamic world map, choose-your-own-adventure gameplay, mini-games, dashboards, generative AI stories and visuals, ambient sound, and a "How I Built This" page that includes this full prompt and showcases how Bolt.new built the app in one shot. Prioritize storytelling, interactivity, visual design, AI generation, and climate education. Use Bolt.new's full stack to autogenerate UI, logic, content, and interactivity from this single prompt. Include everything that makes it feel award-worthy.`;
    
    navigator.clipboard.writeText(promptText);
    alert('Prompt copied to clipboard!');
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            How I Built This with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {' '}Bolt.new
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A showcase of AI-powered single-shot app development - from concept to full-featured 
            climate simulation in one comprehensive prompt.
          </p>
        </motion.div>

        {/* The Magic of Single-Shot Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">The Magic of Single-Shot Development</h2>
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            This entire application - with its interactive globe, climate simulations, mini-games, 
            data visualizations, AI story generation, and responsive design - was created from a 
            single, comprehensive prompt. No iterative development, no multiple sessions, 
            just pure AI-powered creativity unleashed in one shot.
          </p>

          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">The Original Prompt</h3>
              <button
                onClick={copyPrompt}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy Prompt</span>
              </button>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "Build me a visually stunning, immersive, interactive climate simulation and 
              storytelling app called 'Climate Quest: Race to Net Zero'. The app should combine: 
              a dynamic world map, choose-your-own-adventure gameplay, mini-games, dashboards, 
              generative AI stories and visuals, ambient sound, and a 'How I Built This' page..."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1</div>
              <div className="text-sm text-gray-400">Single Prompt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">Generated Files</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">~5min</div>
              <div className="text-sm text-gray-400">Development Time</div>
            </div>
          </div>
        </motion.div>

        {/* Architecture & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Code className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Technical Architecture</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { tech: 'React 18 + TypeScript', desc: 'Modern component architecture with type safety' },
                { tech: 'Tailwind CSS', desc: 'Utility-first styling with custom gradients' },
                { tech: 'Framer Motion', desc: 'Smooth animations and micro-interactions' },
                { tech: 'Chart.js', desc: 'Interactive data visualizations' },
                { tech: 'React Router', desc: 'Client-side routing and navigation' },
                { tech: 'Vite', desc: 'Fast development server and build tool' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">{item.tech}</div>
                    <div className="text-sm text-gray-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Generated Features</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { feature: 'Interactive 3D Globe', status: 'Complete' },
                { feature: 'Climate Decision Engine', status: 'Complete' },
                { feature: 'Real-time Data Dashboard', status: 'Complete' },
                { feature: 'AI Story Generator', status: 'Complete' },
                { feature: 'Responsive Design', status: 'Complete' },
                { feature: 'Animated Visualizations', status: 'Complete' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{item.feature}</span>
                  <span className="text-green-400 text-sm font-semibold">
                    ✓ {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* The AI Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Brain className="w-8 h-8 text-pink-400" />
            <h2 className="text-3xl font-bold text-white">The AI Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Prompt Analysis',
                description: 'AI analyzes requirements and creates comprehensive architecture plan',
                icon: Brain
              },
              {
                step: '2',
                title: 'Code Generation',
                description: 'Generates React components, TypeScript types, and utility functions',
                icon: Code
              },
              {
                step: '3',
                title: 'Design System',
                description: 'Creates cohesive visual design with colors, typography, and animations',
                icon: Sparkles
              },
              {
                step: '4',
                title: 'Integration',
                description: 'Assembles all components into a working, production-ready application',
                icon: Rocket
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Makes This Special */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-white">What Makes This Special</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Intelligence</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Simulated climate modeling with realistic data</li>
                <li>• Dynamic story generation based on user choices</li>
                <li>• Intelligent consequence prediction</li>
                <li>• Adaptive UI that responds to game state</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Production-Ready Quality</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Clean, maintainable code structure</li>
                <li>• Responsive design for all devices</li>
                <li>• Accessible UI with proper contrast</li>
                <li>• Optimized performance and animations</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Try It Yourself */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Experience the Future of Development</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            This app represents a new paradigm in software development - where AI understands 
            your vision and brings it to life instantly. Ready to build your own AI-powered application?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Try Bolt.new</span>
            </a>
            
            <button
              onClick={copyPrompt}
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/20 flex items-center justify-center space-x-2"
            >
              <Copy className="w-5 h-5" />
              <span>Copy This Prompt</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;