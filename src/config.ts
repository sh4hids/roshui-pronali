export type SiteConfig = {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  date: {
    locale: string | string[] | undefined;
    options: Intl.DateTimeFormatOptions;
  };
};

export type SiteMeta = {
  title: string;
  description?: string;
  ogImage?: string | undefined;
  articleDate?: string | undefined;
};

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'শহীদ',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'রসুই প্রণালী',
  // Meta property used as the default description meta property
  description:
    'ঘরে বসেই বাংলা, চাইনিজ, মোঘলাই, ইন্ডিয়ান, থাইসহ দেশী-বিদেশী অসংখ্য খাবারের রেসিপি খুঁজুন বাংলায়',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'bn',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'bn',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
};
