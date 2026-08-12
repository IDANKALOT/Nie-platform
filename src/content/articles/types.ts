import type { ReactNode } from 'react'
import type { ArticleFaqItem } from '@/components/articles/ArticleFaq'

export interface ArticleContent {
  title: string
  description: string
  breadcrumbHome: string
  breadcrumbLabel: string
  h1: string
  updatedLabel: string
  lastUpdated: string
  intro: ReactNode
  body: ReactNode
  faqHeading: string
  faq: ArticleFaqItem[]
  ctaHeading: string
  ctaText: string
  ctaButton: string
  disclaimer: string
}
