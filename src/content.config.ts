import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const cars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cars' }),
  schema: z.object({
    title: z.string().optional(),
    year: z.number().int().min(2000).max(2030).optional(),
    price: z.number().optional(),
    wasPrice: z.number().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    fuel: z.enum(['petrol', 'diesel', 'electric', 'hybrid']).optional(),
    transmission: z.enum(['auto', 'manual']).optional(),
    seats: z.number().int().min(2).max(9).optional(),
    whatsappNumber: z.string().optional(),
    whatsappText: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    location: z.string().default('Mumbai'),
    downPayment: z.string().optional(),
    financeBalance: z.string().optional(),
    emi: z.string().optional(),
    pending: z.string().optional(),
    insurance: z.enum(['full', 'third']).default('full'),
    leasePeriod: z.string().default('24 Months'),
    kms: z.number().int().default(0),
    mileage: z.string().default('15 kmpl'),
    rcOwnerDirect: z.boolean().default(true),
    expectingAmount: z.number().optional(),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().optional(),
    order: z.number().default(0),
    logoImage: z.string().optional(),
    heroTitleLine1: z.string().optional(),
    heroTitleLine2: z.string().optional(),
    heroDescription: z.string().optional(),
  }),
})

export const collections = { cars, pages }
