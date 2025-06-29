import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface DataCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  severity?: 'low' | 'medium' | 'high' | 'critical';
  description?: string;
  className?: string;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  unit = '',
  trend,
  severity = 'low',
  description,
  className = ''
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'from-red-600 to-red-800 border-red-500';
      case 'high': return 'from-orange-600 to-orange-800 border-orange-500';
      case 'medium': return 'from-yellow-600 to-yellow-800 border-yellow-500';
      default: return 'from-green-600 to-green-800 border-green-500';
    }
  };

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-red-400" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-green-400" />;
    return null;
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${getSeverityColor(severity)} p-6 rounded-xl border backdrop-blur-lg shadow-lg ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
          {title}
        </h3>
        {severity === 'critical' && (
          <AlertTriangle className="w-5 h-5 text-red-300 animate-pulse" />
        )}
      </div>
      
      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-3xl font-bold text-white">
          {typeof value === 'number' ? value.toFixed(1) : value}
        </span>
        {unit && (
          <span className="text-white/70 text-sm font-medium">{unit}</span>
        )}
        {getTrendIcon()}
      </div>
      
      {description && (
        <p className="text-white/80 text-xs leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default DataCard;