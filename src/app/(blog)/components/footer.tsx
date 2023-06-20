import { AnchorHTMLAttributes } from 'react'
import { ArrowUpRight } from '@/shared/lib/phosphor-icons'


export function Footer() {
  const Link = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="inline-flex items-end gap-px active:text-neutral-900 active:dark:text-neutral-200 hover:text-neutral-900 hover:dark:text-neutral-200"
      target="_blank"
    >
      {children}
    </a>
  )

  const ArrowIcon = () => <ArrowUpRight className="text-xs" />

  return (
    <div className="mt-28 border-t border-neutral-300/30 py-11 dark:border-neutral-800/20">
      <div className="blog-content-w m-auto flex items-center md:justify-between leading-none">
        <div className="hidden md:flex gap-4 text-neutral-500 dark:text-neutral-400">
          <Link href="https://github.com/mateusfg7/mfg-b/blob/main/LICENSE" rel='license'>
            <span>License</span>
            <ArrowIcon />
          </Link>
          <Link href="/sitemap.xml" rel='noreferrer'>
            <span>Sitemap</span>
            <ArrowIcon />
          </Link>
          <Link href="/feed" rel='noreferrer'>
            <span>RSS</span>
            <ArrowIcon />
          </Link>
          <Link href="https://github.com/mateusfg7/mfg-b" rel='external'>
            <span>Github</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="text-sm text-center md:text-right text-neutral-400 dark:text-neutral-500">
          Built with <Link href="https://nextjs.org/" rel='external'>Next.js</Link>,{' '}
          <Link href="https://mdxjs.com/" rel='external'>MDX</Link>,{' '}
          <Link href="https://tailwindcss.com/" rel='external'>Tailwindcss</Link> and{' '}
          <Link href="https://www.contentlayer.dev/" rel='external'>Contentlayer</Link> by{' '}
          <Link href="https://github.com/mateusfg7" rel='external'>Mateus Felipe</Link>.
        </div>
      </div>
    </div>
  )
}
