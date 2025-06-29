import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Download, Share, RefreshCw, Wand2 } from 'lucide-react';
import { generateAIStory, calculateOverallScore } from '../utils/gameLogic';
import { GameState } from '../types';

const Story: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>('optimistic');
  const [generatedStory, setGeneratedStory] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyTitle, setStoryTitle] = useState<string>('');
  const [customPrompt, setCustomPrompt] = useState<string>('');

  const scenarios = [
    {
      id: 'optimistic',
      title: 'Green Utopia',
      description: 'A future where humanity successfully achieves net zero and thrives sustainably',
      gameState: {
        year: 2024,
        globalTemperature: 0.8,
        co2Concentration: 350,
        renewablePercent: 95,
        economicScore: 85,
        environmentScore: 90,
        socialScore: 88,
        decisions: []
      } as GameState,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'balanced',
      title: 'Adaptive Resilience',
      description: 'A challenging but manageable future where technology and adaptation help humanity cope',
      gameState: {
        year: 2024,
        globalTemperature: 1.8,
        co2Concentration: 420,
        renewablePercent: 65,
        economicScore: 65,
        environmentScore: 60,
        socialScore: 70,
        decisions: []
      } as GameState,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'challenging',
      title: 'Survival & Innovation',
      description: 'A difficult future that tests human ingenuity and resilience to the limit',
      gameState: {
        year: 2024,
        globalTemperature: 2.8,
        co2Concentration: 500,
        renewablePercent: 45,
        economicScore: 40,
        environmentScore: 35,
        socialScore: 55,
        decisions: []
      } as GameState,
      color: 'from-red-500 to-red-700'
    }
  ];

  const generateStory = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const scenario = scenarios.find(s => s.id === selectedScenario);
    if (!scenario) return;

    let story = generateAIStory(scenario.gameState);
    
    // Add custom elements if user provided a prompt
    if (customPrompt.trim()) {
      story += `\n\n${customPrompt.trim()} This personal touch weaves seamlessly into the broader narrative of humanity's climate journey, showing how individual choices and dreams shape our collective future.`;
    }

    setGeneratedStory(story);
    setStoryTitle(generateStoryTitle(scenario.title));
    setIsGenerating(false);
  };

  const generateStoryTitle = (scenarioTitle: string): string => {
    const titles = {
      'Green Utopia': [
        'Gardens of Tomorrow',
        'The Green Renaissance',
        'Harmony Restored',
        'Earth\'s New Dawn'
      ],
      'Adaptive Resilience': [
        'The Turning Tide',
        'Bridges to Tomorrow',
        'Rising Above',
        'The Resilient Generation'
      ],
      'Survival & Innovation': [
        'Against All Odds',
        'The Last Innovation',
        'Phoenix Rising',
        'Humanity\'s Edge'
      ]
    };

    const titleOptions = titles[scenarioTitle as keyof typeof titles] || ['The Climate Chronicles'];
    return titleOptions[Math.floor(Math.random() * titleOptions.length)];
  };

  const shareStory = () => {
    if (navigator.share) {
      navigator.share({
        title: storyTitle,
        text: generatedStory,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${storyTitle}\n\n${generatedStory}`);
      alert('Story copied to clipboard!');
    }
  };

  const downloadStory = () => {
    const element = document.createElement('a');
    const file = new Blob([`${storyTitle}\n\n${generatedStory}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${storyTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">AI Story Builder</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Co-create compelling climate futures with AI. Choose a scenario, add your personal touch, 
            and generate immersive stories about humanity's journey to net zero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Story Configuration */}
          <div className="space-y-8">
            {/* Scenario Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Wand2 className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Choose Your Future</h2>
              </div>

              <div className="space-y-4">
                {scenarios.map((scenario) => (
                  <motion.button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all transform hover:scale-105 ${
                      selectedScenario === scenario.id
                        ? `bg-gradient-to-r ${scenario.color} shadow-lg`
                        : 'bg-white/5 hover:bg-white/10'
                    } border border-white/20`}
                    whileHover={{ y: -2 }}
                  >
                    <h3 className="font-bold text-white text-lg mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {scenario.description}
                    </p>
                    <div className="mt-3 flex items-center space-x-4 text-xs text-gray-400">
                      <span>Score: {calculateOverallScore(scenario.gameState)}/100</span>
                      <span>Temp: +{scenario.gameState.globalTemperature}°C</span>
                      <span>Renewables: {scenario.gameState.renewablePercent}%</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Custom Prompt */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Personal Touch</h2>
              </div>
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Add your own elements to the story... (e.g., 'Include a character named Alex who invented a new type of solar panel' or 'Set the story in a floating city in the Pacific Ocean')"
                className="w-full h-32 bg-white/5 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>

            {/* Generate Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={generateStory}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Generating Story...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Climate Story</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Generated Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Your Climate Story</h2>
              </div>
              
              {generatedStory && (
                <div className="flex space-x-2">
                  <button
                    onClick={shareStory}
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    title="Share Story"
                  >
                    <Share className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={downloadStory}
                    className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    title="Download Story"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
            </div>

            <div className="min-h-96">
              {isGenerating ? (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-300">AI is crafting your climate story...</p>
                  </div>
                </div>
              ) : generatedStory ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">{storyTitle}</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {generatedStory}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Generated by AI</span>
                      <span>•</span>
                      <span>Scenario: {scenarios.find(s => s.id === selectedScenario)?.title}</span>
                      <span>•</span>
                      <span>Words: {generatedStory.split(' ').length}</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-96 text-center">
                  <div>
                    <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">
                      Select a scenario and click "Generate Climate Story" to begin
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Story Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Story Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Last Coal Plant",
                description: "A story about the final shutdown of fossil fuel infrastructure and the communities that transform with it."
              },
              {
                title: "Ocean Farmers",
                description: "Following marine engineers who cultivate kelp forests while restoring ocean ecosystems."
              },
              {
                title: "The Climate Refugees",
                description: "A tale of resilience as communities adapt to rising seas and changing weather patterns."
              }
            ].map((example, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-gray-400 text-sm">{example.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;