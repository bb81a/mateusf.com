import { getGithubUserData } from '@/shared/lib/github'
import { Cube } from '@/shared/wrappers/phosphor-icons'

export async function Repos() {
  const { public_repos } = await getGithubUserData()

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Repositories</span>
        <Cube weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{public_repos}</div>
    </div>
  )
}
