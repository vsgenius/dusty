type Tyre = 'soft' | 'medium' | 'hard' | 'intermediate' | 'rain';
type Weather = 'dry' | 'drizzle' | 'rain';
type RaceStage = 'qualification' | 'start' | 'race';

function tyreType(weather: Weather, stage: RaceStage): Tyre {
  if (weather === 'rain') {
    return 'rain';
  }

  if (weather === 'drizzle') {
    return 'intermediate';
  }

  if (stage === 'qualification') {
    return 'soft';
  }

  if (stage === 'start') {
    return 'medium';
  }

  return 'hard';
}

export default tyreType;
