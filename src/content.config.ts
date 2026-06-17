import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const cars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cars' }),
  schema: z.object({
    title: z.string(),
    year: z.number().int().min(2000).max(2030),
    price: z.number(),
    wasPrice: z.number().optional(),
    brand: z.string(),
    model: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    fuel: z.enum(['petrol', 'diesel', 'electric', 'hybrid']),
    transmission: z.enum(['auto', 'manual']),
    seats: z.number().int().min(2).max(9),
    whatsappNumber: z.string(),
    whatsappText: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    logoImage: z.string().optional(),
    heroTitleLine1: z.string().optional(),
    heroTitleLine2: z.string().optional(),
    heroDescription: z.string().optional(),
  }),
})

export const collections = { cars, pages }
