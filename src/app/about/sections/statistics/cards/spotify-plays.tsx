import { SpotifyLogo } from '@phosphor-icons/react/dist/ssr'

import { Card } from '../card'
import { getLastFmUserInfo } from '@/shared/lib/lastFm'

export async function SpotifyPlays() {
  const { playcount } = await getLastFmUserInfo()

  return (
    <Card
      title="Spotify Plays"
      icon={<SpotifyLogo weight="duotone" />}
      content={playcount}
    />
  )
}
