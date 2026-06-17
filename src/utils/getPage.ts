import { getCollection, render } from 'astro:content'

/** Fetches and renders a page from the `pages` collection by its ID. */
export async function getPage(id: string) {
  const pages = await getCollection('pages')
  const page = pages.find((p) => p.id === id)
  if (!page) return { page: undefined, Content: undefined }
  const { Content } = await render(page)
  return { page, Content }
}
