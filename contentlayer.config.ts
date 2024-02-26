/* eslint-disable no-void */

import { makeSource } from 'contentlayer/source-files'

import { Project } from './content/definitions/Project'
import { Til } from './content/definitions/Til'
import { AboutMe } from './content/definitions/AboutMe'
import { remarkPlugins, rehypePlugins } from './content/plugin'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Til, AboutMe],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins,
    rehypePlugins: rehypePlugins as unknown as undefined
  }
})
