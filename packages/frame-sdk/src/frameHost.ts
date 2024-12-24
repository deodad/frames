import type { WireFrameHost } from '@farcaster/frame-core'
import { wrap } from 'comlink'
import { endpoint } from './endpoint'

export const frameHost = wrap<WireFrameHost>(endpoint)
