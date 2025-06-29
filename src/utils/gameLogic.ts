import { GameState, Decision, DecisionOption } from '../types';

export const initialGameState: GameState = {
  year: 2024,
  globalTemperature: 1.2,
  co2Concentration: 420,
  renewablePercent: 28,
  economicScore: 50,
  environmentScore: 40,
  socialScore: 55,
  decisions: []
};

export const applyDecision = (gameState: GameState, decision: Decision, option: DecisionOption): GameState => {
  const newState = { ...gameState };
  
  // Apply impacts
  newState.globalTemperature += option.impact.temperature;
  newState.co2Concentration += option.impact.co2;
  newState.economicScore += option.impact.economy;
  newState.environmentScore += option.impact.environment;
  newState.socialScore += option.impact.social;
  
  // Update renewable percentage based on environment score
  newState.renewablePercent = Math.min(100, Math.max(0, 
    newState.renewablePercent + (option.impact.environment * 0.5)
  ));
  
  // Advance year
  newState.year += 2;
  
  // Add decision to history
  newState.decisions.push(decision);
  
  // Ensure values stay within reasonable bounds
  newState.globalTemperature = Math.max(0.8, Math.min(4.0, newState.globalTemperature));
  newState.co2Concentration = Math.max(350, Math.min(600, newState.co2Concentration));
  newState.economicScore = Math.max(0, Math.min(100, newState.economicScore));
  newState.environmentScore = Math.max(0, Math.min(100, newState.environmentScore));
  newState.socialScore = Math.max(0, Math.min(100, newState.socialScore));
  
  return newState;
};

export const calculateOverallScore = (gameState: GameState): number => {
  const temperatureScore = Math.max(0, 100 - (gameState.globalTemperature - 1.0) * 30);
  const co2Score = Math.max(0, 100 - (gameState.co2Concentration - 350) * 0.4);
  const renewableScore = gameState.renewablePercent;
  
  return Math.round((
    temperatureScore * 0.3 +
    co2Score * 0.3 +
    renewableScore * 0.2 +
    gameState.environmentScore * 0.2
  ));
};

export const getScenarioOutcome = (gameState: GameState): string => {
  const overallScore = calculateOverallScore(gameState);
  
  if (overallScore >= 80) {
    return "🌟 Net Zero Achieved! You've successfully guided humanity to a sustainable future. Clean energy powers the world, forests are thriving, and communities are resilient.";
  } else if (overallScore >= 60) {
    return "🌱 On Track for Success! Significant progress has been made toward sustainability. With continued effort, net zero is within reach.";
  } else if (overallScore >= 40) {
    return "⚠️ Mixed Results. Some positive changes have been implemented, but more aggressive action is needed to prevent dangerous climate change.";
  } else {
    return "🔥 Climate Crisis Continues. Current policies are insufficient to prevent catastrophic warming. Urgent action is required.";
  }
};

export const generateAIStory = (gameState: GameState): string => {
  const year = gameState.year + 25; // Future projection
  const score = calculateOverallScore(gameState);
  
  if (score >= 80) {
    return `In ${year}, Sarah walks through the vertical gardens of Neo-Singapore, where buildings breathe with living walls and the air tastes clean. Solar collectors glisten like jewels on every surface, while underground, the old subway tunnels have been converted into mushroom farms. The last coal plant was decommissioned a decade ago, now serving as a museum where children learn about the "dark age" of fossil fuels. Ocean thermal energy converters provide endless power, and the Great Barrier Reef, brought back from the brink, hosts virtual reality tours for millions of students worldwide. This is the world your decisions helped create.`;
  } else if (score >= 40) {
    return `The year ${year} finds Marcus adjusting his climate suit as he steps outside. The morning air is thick but manageable, filtered by the massive atmospheric processors that ring the city. Half the world runs on fusion power now, but the transition came almost too late. The old coastlines are gone, protected by towering sea walls that double as vertical farms. In the distance, rewilding drones plant climate-adapted trees in the expanding desert. It's not the future anyone wanted, but human ingenuity has found a way to adapt. Your choices helped shape this resilient, if challenging, world.`;
  } else {
    return `Elena checks her water rations as she prepares for another day in ${year}. The great migrations have stabilized somewhat, with floating cities housing millions of climate refugees. Underground cities thrive where the surface has become too hostile, connected by hyperloop networks that run on geothermal energy. The wild forests are gone, replaced by carefully managed carbon farms, but somehow nature has found a way to adapt. Even in this harsh future, communities have learned to live together, sharing resources and knowledge. The choices made in the 2020s set humanity on a difficult path, but the human spirit endures.`;
  }
};