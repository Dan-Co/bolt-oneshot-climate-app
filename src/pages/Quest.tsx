import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Thermometer, Leaf, DollarSign, Users, ChevronRight } from 'lucide-react';
import { GameState, Decision } from '../types';
import { initialGameState, applyDecision, calculateOverallScore, getScenarioOutcome } from '../utils/gameLogic';
import { climateDecisions } from '../data/climateData';
import DataCard from '../components/DataCard';

const Quest: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [currentDecisionIndex, setCurrentDecisionIndex] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentDecision = climateDecisions[currentDecisionIndex];
  const overallScore = calculateOverallScore(gameState);

  const handleDecision = (optionId: string) => {
    if (!currentDecision) return;

    const option = currentDecision.options.find(opt => opt.id === optionId);
    if (!option) return;

    setSelectedOption(optionId);

    setTimeout(() => {
      const newGameState = applyDecision(gameState, currentDecision, option);
      setGameState(newGameState);

      if (currentDecisionIndex + 1 >= climateDecisions.length) {
        setIsGameComplete(true);
      } else {
        setCurrentDecisionIndex(currentDecisionIndex + 1);
      }

      setSelectedOption(null);
    }, 1000);
  };

  const resetGame = () => {
    setGameState(initialGameState);
    setCurrentDecisionIndex(0);
    setIsGameComplete(false);
    setSelectedOption(null);
  };

  if (isGameComplete) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Quest Complete!</h1>
            <p className="text-xl text-gray-300">
              You've guided humanity through critical climate decisions. Here's how the world turned out:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <DataCard
              title="Final Year"
              value={gameState.year}
              description="Your journey through time"
            />
            <DataCard
              title="Global Temperature"
              value={gameState.globalTemperature}
              unit="°C"
              severity={gameState.globalTemperature > 2.0 ? 'critical' : gameState.globalTemperature > 1.5 ? 'high' : 'medium'}
              description="Above pre-industrial levels"
            />
            <DataCard
              title="Renewable Energy"
              value={gameState.renewablePercent}
              unit="%"
              severity={gameState.renewablePercent > 70 ? 'low' : gameState.renewablePercent > 40 ? 'medium' : 'high'}
              description="Of global energy mix"
            />
            <DataCard
              title="Overall Score"
              value={overallScore}
              unit="/100"
              severity={overallScore > 70 ? 'low' : overallScore > 40 ? 'medium' : 'high'}
              description="Climate action effectiveness"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Your Climate Legacy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {getScenarioOutcome(gameState)}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {gameState.economicScore}
                </div>
                <div className="text-sm text-gray-400">Economic Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {gameState.environmentScore}
                </div>
                <div className="text-sm text-gray-400">Environmental Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {gameState.socialScore}
                </div>
                <div className="text-sm text-gray-400">Social Score</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
              >
                Play Again
              </button>
              <button
                onClick={() => window.location.href = '/story'}
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:bg-white/20"
              >
                Create Your Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Game Status */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <DataCard
            title="Year"
            value={gameState.year}
            className="text-center"
          />
          <DataCard
            title="Temperature"
            value={gameState.globalTemperature}
            unit="°C"
            severity={gameState.globalTemperature > 2.0 ? 'critical' : gameState.globalTemperature > 1.5 ? 'high' : 'medium'}
            trend={gameState.globalTemperature > 1.5 ? 'up' : 'stable'}
          />
          <DataCard
            title="CO₂ Level"
            value={gameState.co2Concentration}
            unit="ppm"
            severity={gameState.co2Concentration > 450 ? 'critical' : gameState.co2Concentration > 400 ? 'high' : 'medium'}
          />
          <DataCard
            title="Renewables"
            value={gameState.renewablePercent}
            unit="%"
            severity={gameState.renewablePercent > 70 ? 'low' : gameState.renewablePercent > 40 ? 'medium' : 'high'}
          />
          <DataCard
            title="Progress"
            value={`${currentDecisionIndex + 1}/${climateDecisions.length}`}
            description="Decisions made"
          />
        </div>

        {/* Current Decision */}
        <AnimatePresence mode="wait">
          {currentDecision && (
            <motion.div
              key={currentDecision.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-semibold">Year {gameState.year}</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentDecision.title}
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {currentDecision.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentDecision.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleDecision(option.id)}
                    disabled={selectedOption !== null}
                    className={`p-6 rounded-xl text-left transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                      selectedOption === option.id
                        ? 'bg-green-600 border-green-400'
                        : 'bg-white/10 border-white/20 hover:bg-white/20'
                    } border backdrop-blur-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white text-lg">
                        Option {index + 1}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {option.text}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center space-x-1">
                        <Thermometer className="w-3 h-3" />
                        <span className={option.impact.temperature < 0 ? 'text-green-400' : 'text-red-400'}>
                          {option.impact.temperature > 0 ? '+' : ''}{option.impact.temperature}°C
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Leaf className="w-3 h-3" />
                        <span className={option.impact.environment > 0 ? 'text-green-400' : 'text-red-400'}>
                          {option.impact.environment > 0 ? '+' : ''}{option.impact.environment}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-3 h-3" />
                        <span className={option.impact.economy > 0 ? 'text-green-400' : 'text-red-400'}>
                          {option.impact.economy > 0 ? '+' : ''}{option.impact.economy}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span className={option.impact.social > 0 ? 'text-green-400' : 'text-red-400'}>
                          {option.impact.social > 0 ? '+' : ''}{option.impact.social}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {selectedOption && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-300 font-semibold">
                    Decision recorded! Calculating global impact...
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decision History */}
        {gameState.decisions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Your Climate Journey</h2>
            <div className="space-y-3">
              {gameState.decisions.map((decision, index) => (
                <div key={decision.id} className="flex items-center space-x-3 text-gray-300">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <span>{decision.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quest;