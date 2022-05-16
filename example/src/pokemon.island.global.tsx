import { createIsland } from '../../dist/index.module'
import { Pokemon } from './pokemon.component'
import style from './pokemon.island.css'
import { injectCSS } from './utils'

injectCSS(style)

const island = createIsland(Pokemon)

// @ts-ignore
window._pokemon = island
