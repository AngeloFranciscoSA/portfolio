import { describe, it, expect } from 'vitest'
import { translations } from '@/i18n/translations'

describe('translations', () => {
  const pt = translations.pt
  const en = translations.en

  it('both locales export all top-level keys', () => {
    const ptKeys = Object.keys(pt).sort()
    const enKeys = Object.keys(en).sort()
    expect(ptKeys).toEqual(enKeys)
  })

  describe('nav', () => {
    it('PT has all nav keys', () => {
      expect(pt.nav).toHaveProperty('about')
      expect(pt.nav).toHaveProperty('experience')
      expect(pt.nav).toHaveProperty('skills')
      expect(pt.nav).toHaveProperty('education')
      expect(pt.nav).toHaveProperty('contact')
    })

    it('EN has all nav keys', () => {
      expect(en.nav).toHaveProperty('about')
      expect(en.nav).toHaveProperty('experience')
      expect(en.nav).toHaveProperty('skills')
      expect(en.nav).toHaveProperty('education')
      expect(en.nav).toHaveProperty('contact')
    })

    it('nav labels differ between locales', () => {
      expect(pt.nav.about).not.toBe(en.nav.about)
    })
  })

  describe('experience.jobs', () => {
    it('both locales have the same number of jobs', () => {
      expect(pt.experience.jobs.length).toBe(en.experience.jobs.length)
    })

    it('every job has required fields', () => {
      ;[...pt.experience.jobs, ...en.experience.jobs].forEach((job) => {
        expect(job).toHaveProperty('role')
        expect(job).toHaveProperty('company')
        expect(job).toHaveProperty('location')
        expect(job).toHaveProperty('period')
        expect(Array.isArray(job.highlights)).toBe(true)
        expect(job.highlights.length).toBeGreaterThan(0)
        expect(Array.isArray(job.tags)).toBe(true)
        expect(job.tags.length).toBeGreaterThan(0)
      })
    })

    it('first job is marked as current in both locales', () => {
      expect(pt.experience.jobs[0]?.current).toBe(true)
      expect(en.experience.jobs[0]?.current).toBe(true)
    })

    it('company names are the same across locales (proper nouns)', () => {
      pt.experience.jobs.forEach((job, i) => {
        expect(job.company).toBe(en.experience.jobs[i]?.company)
      })
    })

    it('tag count is the same across locales', () => {
      pt.experience.jobs.forEach((job, i) => {
        expect(job.tags.length).toBe(en.experience.jobs[i]?.tags.length)
      })
    })
  })

  describe('skills.groups', () => {
    it('both locales have the same number of skill groups', () => {
      expect(pt.skills.groups.length).toBe(en.skills.groups.length)
    })

    it('every group has a category and non-empty skills array', () => {
      ;[...pt.skills.groups, ...en.skills.groups].forEach((group) => {
        expect(typeof group.category).toBe('string')
        expect(group.category.length).toBeGreaterThan(0)
        expect(Array.isArray(group.skills)).toBe(true)
        expect(group.skills.length).toBeGreaterThan(0)
      })
    })
  })

  describe('education.items', () => {
    it('both locales have the same number of education items', () => {
      expect(pt.education.items.length).toBe(en.education.items.length)
    })

    it('every item has required fields', () => {
      ;[...pt.education.items, ...en.education.items].forEach((item) => {
        expect(typeof item.degree).toBe('string')
        expect(typeof item.institution).toBe('string')
        expect(typeof item.period).toBe('string')
      })
    })
  })

  describe('about.stats', () => {
    it('both locales have 4 stats', () => {
      expect(pt.about.stats.length).toBe(4)
      expect(en.about.stats.length).toBe(4)
    })

    it('stat count is the same across locales', () => {
      expect(pt.about.stats.length).toBe(en.about.stats.length)
    })

    it('numeric stat values are the same across locales', () => {
      // values like '7+', '5', 'PT · EN' are locale-invariant; 'Sênior'/'Senior' differs
      const numericPt = pt.about.stats.filter((s) => /^[\d+·\s]+$/.test(s.value))
      const numericEn = en.about.stats.filter((s) => /^[\d+·\s]+$/.test(s.value))
      expect(numericPt.map((s) => s.value)).toEqual(numericEn.map((s) => s.value))
    })
  })

  describe('footer', () => {
    it('copy contains {year} placeholder', () => {
      expect(pt.footer.copy).toContain('{year}')
      expect(en.footer.copy).toContain('{year}')
    })
  })
})
