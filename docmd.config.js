// docmd.config.js
module.exports = {
  // --- Core Metadata ---
  siteTitle: 'Ongoing Competency',
  siteUrl: process.env.SITE_URL || '', // e.g. https://mysite.com (Critical for SEO/Sitemap)

  // --- Branding ---
  logo: null,
  favicon: 'assets/favicon.svg',

  // --- Source & Output ---
  srcDir: 'docs',
  outputDir: 'site',

  // --- Theme & Layout ---
  theme: {
    name: 'sky',            // Options: 'default', 'sky', 'ruby', 'retro'
    defaultMode: 'system',  // 'light', 'dark', or 'system'
    enableModeToggle: true, // Show mode toggle button
    positionMode: 'top',    // 'top' or 'bottom'
    codeHighlight: true,    // Enable Highlight.js
    customCss: ['assets/css/custom.css'],          // e.g. ['assets/css/custom.css']
  },

  // --- Features ---
  search: true,           // Built-in offline search
  minify: true,           // Minify HTML/CSS/JS in build
  autoTitleFromH1: true,  // Auto-generate page title from first H1
  copyCode: true,         // Show "copy" button on code blocks
  pageNavigation: true,   // Prev/Next buttons at bottom

  // --- Navigation (Sidebar) ---
  navigation: [
    { title: 'Introduction', path: '/', icon: 'home' },
    { title: 'Templates', path: 'templates', icon: 'layout' },
    { title: 'Validation Options', path: 'validation-options', icon: 'check-circle' },
    { title: 'How To: Create Material', path: 'how-to-create-material', icon: 'file-plus' },
    { title: 'How To: Create Test', path: 'how-to-create-test', icon: 'clipboard-list' },
    { title: 'How To: Create Curriculum', path: 'how-to-create-curriculum', icon: 'layers' },,
    { title: 'How To: Create ILT Event', path: 'how-to-create-event', icon: 'calendar' },
    { title: 'How To: Create Evaluation', path: 'how-to-create-evaluation', icon: 'message-square' },
    { title: 'How To: Reversion Material', path: 'how-to-reversion-material', icon: 'rotate-ccw' },
    { title: 'How To: Reversion Test', path: 'how-to-reversion-test', icon: 'rotate-ccw' },
    { title: 'How To: Reversion Curriculum', path: 'how-to-reversion-curriculum', icon: 'rotate-ccw' },
    { title: 'How To: Assign', path: 'how-to-assign', icon: 'user-plus' },
  ],

  // --- Plugins ---
  plugins: {
    seo: {
      defaultDescription: 'Documentation built with docmd.',
      openGraph: {
        defaultImage: '',   // e.g. 'assets/images/og-image.png'
      },
      twitter: {
        cardType: 'summary_large_image',
      }
    },
    analytics: {
      googleV4: {
        measurementId: 'G-X9WTDL262N' // Replace with your Google Analytics Measurement ID
      }
    },
    sitemap: {
      defaultChangefreq: 'weekly',  // e.g. 'daily', 'weekly', 'monthly'
      defaultPriority: 0.8          // Priority between 0.0 and 1.0
    }
  },

  // --- Footer ---
  footer: null,
  
  // --- Edit Link ---
  editLink: {
    enabled: false,
    baseUrl: 'https://github.com/USERNAME/REPO/edit/main/docs',
    text: 'Edit this page'
  }
};
