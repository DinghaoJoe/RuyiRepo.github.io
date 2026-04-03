// @ts-check
import { defineConfig } from 'astro/config'

// GitHub Actions 会注入 GITHUB_REPOSITORY=owner/repo；本地开发未设置时 base 为 '/'
const [, repo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/')
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? ''
const isUserPagesRoot = repo === `${owner}.github.io`
const base = repo && !isUserPagesRoot ? `/${repo}/` : '/'

const site =
  process.env.SITE_URL ??
  (owner && repo ? `https://${owner}.github.io` : undefined)

// https://astro.build/config
export default defineConfig({
  site,
  base,
})
