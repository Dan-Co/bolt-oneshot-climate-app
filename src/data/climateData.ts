import { ClimateData, Decision } from '../types';

export const globalClimateData: ClimateData[] = [
  {
    region: 'Arctic',
    temperature: 2.3,
    co2Level: 420,
    seaLevel: 3.2,
    forestCover: 5,
    renewableEnergy: 15,
    riskLevel: 'critical'
  },
  {
    region: 'Amazon',
    temperature: 1.8,
    co2Level: 415,
    seaLevel: 0,
    forestCover: 67,
    renewableEnergy: 45,
    riskLevel: 'high'
  },
  {
    region: 'Sahara',
    temperature: 2.1,
    co2Level: 425,
    seaLevel: 0,
    forestCover: 2,
    renewableEnergy: 85,
    riskLevel: 'high'
  },
  {
    region: 'Pacific Islands',
    temperature: 1.5,
    co2Level: 410,
    seaLevel: 8.1,
    forestCover: 45,
    renewableEnergy: 25,
    riskLevel: 'critical'
  },
  {
    region: 'Himalaya',
    temperature: 2.0,
    co2Level: 418,
    seaLevel: 0,
    forestCover: 35,
    renewableEnergy: 30,
    riskLevel: 'high'
  },
  {
    region: 'Europe',
    temperature: 1.2,
    co2Level: 405,
    seaLevel: 2.1,
    forestCover: 42,
    renewableEnergy: 62,
    riskLevel: 'medium'
  }
];

export const climateDecisions: Decision[] = [
  {
    id: 'carbon-tax',
    title: 'Global Carbon Tax Implementation',
    description: 'A proposal to implement a worldwide carbon tax to reduce emissions and fund green technology development.',
    options: [
      {
        id: 'high-tax',
        text: 'Implement high carbon tax ($100/ton)',
        impact: { temperature: -0.3, co2: -15, economy: -10, environment: 25, social: -5 }
      },
      {
        id: 'moderate-tax',
        text: 'Implement moderate carbon tax ($50/ton)',
        impact: { temperature: -0.15, co2: -8, economy: -5, environment: 12, social: 0 }
      },
      {
        id: 'no-tax',
        text: 'Reject carbon tax proposal',
        impact: { temperature: 0.1, co2: 5, economy: 5, environment: -10, social: 3 }
      }
    ],
    consequences: [
      'Carbon tax revenue funds massive renewable energy projects',
      'Some industries relocate to countries without carbon pricing',
      'Innovation in clean technology accelerates significantly'
    ]
  },
  {
    id: 'renewable-transition',
    title: 'Renewable Energy Transition',
    description: 'Choose the pace of transitioning from fossil fuels to renewable energy sources.',
    options: [
      {
        id: 'rapid',
        text: 'Rapid transition (10 years)',
        impact: { temperature: -0.4, co2: -20, economy: -15, environment: 30, social: -8 }
      },
      {
        id: 'gradual',
        text: 'Gradual transition (25 years)',
        impact: { temperature: -0.2, co2: -10, economy: 0, environment: 15, social: 2 }
      },
      {
        id: 'slow',
        text: 'Slow transition (50 years)',
        impact: { temperature: 0.1, co2: 2, economy: 8, environment: -5, social: 5 }
      }
    ],
    consequences: [
      'Massive job creation in renewable energy sector',
      'Traditional energy workers need retraining programs',
      'Energy independence reduces geopolitical tensions'
    ]
  },
  {
    id: 'reforestation',
    title: 'Global Reforestation Initiative',
    description: 'Decide on the scale of worldwide forest restoration and protection efforts.',
    options: [
      {
        id: 'massive',
        text: 'Plant 1 trillion trees globally',
        impact: { temperature: -0.25, co2: -12, economy: -8, environment: 35, social: 8 }
      },
      {
        id: 'moderate',
        text: 'Plant 100 billion trees',
        impact: { temperature: -0.1, co2: -5, economy: -3, environment: 15, social: 3 }
      },
      {
        id: 'minimal',
        text: 'Focus on protecting existing forests',
        impact: { temperature: 0, co2: -2, economy: 0, environment: 8, social: 1 }
      }
    ],
    consequences: [
      'Biodiversity increases dramatically in restored areas',
      'Local communities benefit from eco-tourism',
      'Carbon sequestration helps offset industrial emissions'
    ]
  }
];

export const aiGeneratedInsights = [
  "The Amazon rainforest acts as Earth's lungs, absorbing 2.6 billion tons of CO₂ annually.",
  "Arctic ice reflects 90% of solar radiation - as it melts, the dark ocean absorbs more heat, accelerating warming.",
  "Renewable energy costs have dropped 85% in the past decade, making it the cheapest energy source in history.",
  "Urban forests can reduce city temperatures by up to 5°C and improve air quality for millions.",
  "Ocean acidification from CO₂ absorption threatens marine ecosystems that feed 3 billion people.",
  "Green buildings use 30% less energy than conventional buildings and improve occupant health and productivity."
];