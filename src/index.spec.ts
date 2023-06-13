
import { describe, expect, test } from "vitest"
import { formatDuration } from "."

describe("formatDuration", () => {
    test("format 32478231ms to 9h, 1min, 18sec", () => {
      const result = formatDuration({ milliseconds: 32478231 })
  
      expect(result).toBe("9 h, 1 min, 18 sec")
    })
  
    test("format 32478231ms to 9h, 1min, 18sec (no spaces)", () => {
      const result = formatDuration({ milliseconds: 32478231, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("9h, 1min, 18sec")
    })
  
    test("format 32478sec to 9h, 1min, 18sec (no spaces)", () => {
      const result = formatDuration({ seconds: 32478, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("9h, 1min, 18sec")
    })
  
    test("format 32478sec and 5min to 9h, 6min, 18sec (no spaces)", () => {
      const result = formatDuration({ seconds: 32478, minutes: 5, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("9h, 6min, 18sec")
    })
  
    test("format 32478min to 22d, 13h, 18min (no spaces)", () => {
      const result = formatDuration({ minutes: 32478, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("22d, 13h, 18min")
    })
  
    test("format 38h to 1d, 14h (no spaces)", () => {
      const result = formatDuration({ hours: 38, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("1d, 14h")
    })
  
    test("format 5h to 5h (no spaces)", () => {
      const result = formatDuration({ hours: 5, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("5h")
    })
  
    test("format 25h and 15min to 1d, 1h (no spaces; resolution=2)", () => {
      const result = formatDuration({ hours: 25, minutes: 12, resolution: 2, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("1d, 1h")
    })
  
    test("format 24h and 12min to 1d (no spaces; resolution=2)", () => {
      const result = formatDuration({ hours: 24, minutes: 12, resolution: 2, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("1d")
    })
  
    test("format 24h and 12sec to 1d (no spaces; resolution=2)", () => {
      const result = formatDuration({ hours: 24, seconds: 12, resolution: 2, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("1d")
    })
  
    test("format 24h and 12sec to 1d (no spaces)", () => {
      const result = formatDuration({ hours: 24, seconds: 12, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("1d, 0h, 0min, 12sec")
    })
  
    test("format 24h and 12sec to 1d (no spaces)", () => {
      const result = formatDuration({ hours: 24, seconds: 12, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("1d, 0h, 0min, 12sec")
    })
  
    test("format 0s to 0sec", () => {
      const result = formatDuration({ seconds: 0, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("0sec")
    })
    test("format 0s to 0sec (no spaces; resolution=2)", () => {
      const result = formatDuration({ seconds: 0, noSpaceBetweenNumberAndUnit: true })
  
      expect(result).toBe("0sec")
    })
  })
  