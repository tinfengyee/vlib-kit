// packages/ui/scripts/build/index.ts
import { series, parallel } from 'gulp'
import { clean, buildModules, buildFull, generateTypes } from './task'

export async function build() {
  console.log('...build')
}

export default series(clean, parallel(buildModules, buildFull, generateTypes))
