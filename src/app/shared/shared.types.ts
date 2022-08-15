export type IndicatorType = 'performance' | 'organisation';

/*
 * Note that the strings may contain HTML markup, too. Such text will be 
 * sanitized by Angular but basic formatting and links are allowed, at least.
 */
export interface LocalizedString {
  [locale: string]: string
}

export interface Settings {
  version: number,
  rounds: number,
  scenarios: Scenario[],
  strategies: Strategy[],
  ribbons: Ribbon[],
  indicators: Indicator[],
  [extraOption: string]: any
}

export interface Texts {
  [text: string]: LocalizedString
}

export type ComparisonOp = "gt" | "lt" | "eq";

export interface Criterion {
  indicatorId: string,
  operator: ComparisonOp,
  value: number
}

export interface Effects {
  [indicatorId: string]: number
}

export interface Scenario {
  id: string,
  title: LocalizedString,
  description: LocalizedString,
  // Strategy ids
  strategies?: string[],
  effects?: Effects
}

export interface Strategy {
  id: string,
  title: LocalizedString,
  description: LocalizedString,
  feedback: LocalizedString,
  effects?: Effects,
  // Ribbon ids
  ribbons?: string[],
  // Next scenario id
  scenario: string,
  flipped?: boolean,
  locked?: boolean
}

export interface Ribbon {
  id: string,
  title: LocalizedString,
  description?: LocalizedString,
  criteria?: Criterion[],
  effects?: Effects
}

export interface Indicator {
  id: string,
  type: IndicatorType,
  titleTop?: LocalizedString,
  titleBottom?: LocalizedString,
  tooltip?: LocalizedString,
  initialValue?: number,
  minValue?: number,
  maxValue?: number,
  value?: number
}