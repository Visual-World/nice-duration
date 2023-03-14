import { FormatDurationLocalizationGerman } from "./localization/de"
import { FormatDurationLocalizationEnglish } from "./localization/en"
import { FormatDurationLocalizationEnglishShort } from "./localization/en-short"
import { FormatDurationLocalization, SingularPlural } from "./localization/types"

export type { SingularPlural, FormatDurationLocalization }

/* @__PURE__ */ 
export {
  FormatDurationLocalizationEnglishShort, 
  FormatDurationLocalizationEnglish,
  FormatDurationLocalizationGerman,
}

export interface FormatConfig {
  defaultLocalization: FormatDurationLocalization
  defaultResolution?: number
  defaultNoSpaceBetweenNumberAndUnit?: boolean
}

export const formatDurationConfig: FormatConfig = {
  defaultLocalization: FormatDurationLocalizationEnglishShort,
}

const secsOfMinute = 60
const secsOfHour = 60 * secsOfMinute
const secsOfDay = 24 * secsOfHour

export function formatDuration(input: {
  milliseconds?: number
  seconds?: number
  minutes?: number
  hours?: number
  days?: number
  localization?: FormatDurationLocalization
  resolution?: number
  noSpaceBetweenNumberAndUnit?: boolean
}) {
  const localization = input.localization || formatDurationConfig.defaultLocalization
  const resolution = input.resolution || formatDurationConfig.defaultResolution
  const noSpaceBetweenNumberAndUnit = input.noSpaceBetweenNumberAndUnit || formatDurationConfig.defaultNoSpaceBetweenNumberAndUnit

  // normalize
  input.hours = (input.hours ?? 0) + (input.days ?? 0) * 24
  input.days = 0
  input.minutes = (input.minutes ?? 0) + (input.hours ?? 0) * 60
  input.hours = 0
  input.seconds = (input.seconds ?? 0) + (input.minutes ?? 0) * 60
  input.minutes = 0

  let totalRemainingSeconds = input.seconds ?? 0
  totalRemainingSeconds += (input.milliseconds ?? 0) / 1000

  const days = Math.floor(totalRemainingSeconds / secsOfDay)
  totalRemainingSeconds %= secsOfDay

  const hours = Math.floor(totalRemainingSeconds / secsOfHour)
  totalRemainingSeconds %= secsOfHour

  const minutes = Math.floor(totalRemainingSeconds / secsOfMinute)
  totalRemainingSeconds %= secsOfMinute

  const seconds = Math.round(totalRemainingSeconds)

  const resultArr: string[][] = []

  if (days) {
    resultArr.push(getValueUnitArray(days, localization.days))
  }
  if (hours && (!resolution || resultArr.length < resolution)) {
    resultArr.push(getValueUnitArray(hours, localization.hours))
  }
  if (minutes && (!resolution || resultArr.length < resolution)) {
    resultArr.push(getValueUnitArray(minutes, localization.minutes))
  }
  if ((seconds && (!resolution || resultArr.length < resolution)) || resultArr.length == 0) {
    resultArr.push(getValueUnitArray(seconds, localization.seconds))
  }

  const valueUnitGlue = noSpaceBetweenNumberAndUnit ? "" : " "

  return resultArr
    .map((valueAndUnit) => valueAndUnit.join(valueUnitGlue))
    .join(", ")
}

function getValueUnitArray(value: number, singularPlural: SingularPlural) {
  return [value.toString(), value === 1 ? singularPlural.singular || singularPlural.plural : singularPlural.plural]
}
