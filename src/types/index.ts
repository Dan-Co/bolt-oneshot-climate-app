export interface ClimateData {
  region: string;
  temperature: number;
  co2Level: number;
  seaLevel: number;
  forestCover: number;
  renewableEnergy: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface GameState {
  year: number;
  globalTemperature: number;
  co2Concentration: number;
  renewablePercent: number;
  economicScore: number;
  environmentScore: number;
  socialScore: number;
  decisions: Decision[];
}

export interface Decision {
  id: string;
  title: string;
  description: string;
  options: DecisionOption[];
  consequences: string[];
}

export interface DecisionOption {
  id: string;
  text: string;
  impact: {
    temperature: number;
    co2: number;
    economy: number;
    environment: number;
    social: number;
  };
}

export interface MiniGameScore {
  name: string;
  score: number;
  maxScore: number;
  achievements: string[];
}

export interface UserProgress {
  currentYear: number;
  totalScore: number;
  completedDecisions: string[];
  miniGameScores: MiniGameScore[];
  unlockedContent: string[];
}