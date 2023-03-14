
export interface SingularPlural {
    singular?: string
    plural: string
  }
  
  export interface FormatDurationLocalization {
    languageKey: string
    milliseconds: SingularPlural
    seconds: SingularPlural
    minutes: SingularPlural
    hours: SingularPlural
    days: SingularPlural
}
  