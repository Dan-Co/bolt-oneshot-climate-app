import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { TrendingUp, Globe, Zap, TreePine, Droplets, Wind } from 'lucide-react';
import DataCard from '../components/DataCard';
import { aiGeneratedInsights } from '../data/climateData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard: React.FC = () => {
  const [currentInsight, setCurrentInsight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % aiGeneratedInsights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Historical temperature data
  const temperatureData = {
    labels: ['1880', '1900', '1920', '1940', '1960', '1980', '2000', '2020', '2024'],
    datasets: [
      {
        label: 'Global Temperature Anomaly (°C)',
        data: [-0.2, -0.1, 0.0, 0.1, 0.0, 0.3, 0.6, 1.0, 1.2],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // CO2 concentration data
  const co2Data = {
    labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020', '2024'],
    datasets: [
      {
        label: 'CO₂ Concentration (ppm)',
        data: [315, 325, 340, 355, 370, 390, 415, 420],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2
      }
    ]
  };

  // Energy mix data
  const energyMixData = {
    labels: ['Fossil Fuels', 'Nuclear', 'Hydroelectric', 'Wind', 'Solar', 'Other Renewables'],
    datasets: [
      {
        data: [64, 10, 16, 5, 3, 2],
        backgroundColor: [
          '#ef4444',
          '#f59e0b',
          '#3b82f6',
          '#10b981',
          '#f59e0b',
          '#8b5cf6'
        ],
        borderWidth: 0
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#d1d5db'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#d1d5db'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        ticks: {
          color: '#d1d5db'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Climate Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring and analysis of global climate indicators, 
            powered by AI insights and interactive visualizations
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <DataCard
              title="Global Temperature"
              value={1.2}
              unit="°C above pre-industrial"
              severity="high"
              trend="up"
              description="Current warming level"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DataCard
              title="CO₂ Concentration"
              value={420}
              unit="ppm"
              severity="critical"
              trend="up"
              description="Atmospheric carbon dioxide"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <DataCard
              title="Renewable Energy"
              value={28}
              unit="% of global mix"
              severity="medium"
              trend="up"
              description="Clean energy adoption"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <DataCard
              title="Sea Level Rise"
              value={3.4}
              unit="mm/year"
              severity="high"
              trend="up"
              description="Current rate of increase"
            />
          </motion.div>
        </div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">AI Climate Insights</h2>
          </div>
          <motion.p
            key={currentInsight}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {aiGeneratedInsights[currentInsight]}
          </motion.p>
          <div className="flex space-x-2 mt-4">
            {aiGeneratedInsights.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentInsight ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Temperature Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Global Temperature Anomaly</h3>
            </div>
            <div className="h-64">
              <Line data={temperatureData} options={chartOptions} />
            </div>
          </motion.div>

          {/* CO2 Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Wind className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Atmospheric CO₂ Levels</h3>
            </div>
            <div className="h-64">
              <Bar data={co2Data} options={chartOptions} />
            </div>
          </motion.div>
        </div>

        {/* Energy Mix and Regional Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Energy Mix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Global Energy Mix</h3>
            </div>
            <div className="h-64">
              <Doughnut 
                data={energyMixData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: '#d1d5db',
                        font: {
                          size: 10
                        }
                      }
                    }
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Regional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <TreePine className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Regional Climate Hotspots</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  region: 'Arctic',
                  impact: 'Ice sheet melting accelerating',
                  icon: Droplets,
                  severity: 'critical'
                },
                {
                  region: 'Amazon',
                  impact: 'Deforestation reaching tipping point',
                  icon: TreePine,
                  severity: 'high'
                },
                {
                  region: 'Sahara',
                  impact: 'Solar energy potential expanding',
                  icon: Zap,
                  severity: 'low'
                },
                {
                  region: 'Pacific Islands',
                  impact: 'Sea level rise threatening communities',
                  icon: Globe,
                  severity: 'critical'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.region}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.severity === 'critical' ? 'bg-red-600/20 text-red-400' :
                    item.severity === 'high' ? 'bg-orange-600/20 text-orange-400' :
                    'bg-green-600/20 text-green-400'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.region}</h4>
                    <p className="text-sm text-gray-400">{item.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;