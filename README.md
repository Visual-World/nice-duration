# nice-duration

Normalizes and formats duration to human readable string.

This library written in TypeScript with support for tree shakable localization. This results to 2 kb of bundle size. 

## Install
```bash
npm i nice-duration
```

## Usage
```typescript

import { formatDuration, formatDurationConfig } from "nice-duration"

// optional configuration
formatDurationConfig.defaultResolution = 2

const formatted = formatDuration({ minutes: 123456 })

console.log(formatted)
// >> 85 d, 17 h
```