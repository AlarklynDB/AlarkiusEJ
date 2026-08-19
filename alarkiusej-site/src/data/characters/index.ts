import type { CharacterProfile } from './types'
import lhuaGholdt from './lhua-gholdt'
import oaLenhart from './oshaea-oa-lenhart'
import phaliyaTheSlime from './phaliya-the-slime'

export type { CharacterProfile } from './types'

/**
 * Registry of all full character profiles across the site, keyed by the
 * exact display name used on character cards. Add new characters here
 * once their data file exists in this folder.
 */
export const characterProfiles: Record<string, CharacterProfile> = {
  'Lhua Gholdt': lhuaGholdt,
  'Oshaeá "Oa" Ashen Lenhart': oaLenhart,
  'Phaliyá the Slime': phaliyaTheSlime,
}
