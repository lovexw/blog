/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wechat': {
          'bg': '#f7f7f7',
          'text': '#191919',
          'link': '#333333',
          'border': '#eaeaea'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#191919',
            maxWidth: '100%',
            lineHeight: 1.75,
            a: {
              color: '#333333',
              textDecoration: 'none',
              '&:hover': {
                color: '#000000'
              }
            },
            p: {
              marginTop: '1em',
              marginBottom: '1em',
              lineHeight: 1.75
            },
            blockquote: {
              fontWeight: 400,
              fontStyle: 'normal',
              padding: '1em',
              borderLeft: '4px solid #333333',
              backgroundColor: '#f8f8f8',
              margin: '1em 0'
            },
            'blockquote p': {
              margin: 0
            },
            h1: {
              fontWeight: '600',
              fontSize: '1.875em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              lineHeight: 1.3
            },
            h2: {
              fontWeight: '600',
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              lineHeight: 1.3
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              lineHeight: 1.3
            },
            code: {
              color: '#333333',
              backgroundColor: '#f1f1f1',
              padding: '0.2em 0.4em',
              borderRadius: '3px',
              fontSize: '0.875em'
            },
            'pre code': {
              color: 'inherit',
              backgroundColor: 'transparent',
              padding: 0,
              fontSize: '1em'
            },
            hr: {
              borderColor: '#eaeaea',
              margin: '2em 0'
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.625em'
            },
            ol: {
              paddingLeft: '1.625em'
            },
            'ul li, ol li': {
              marginTop: '0.5em',
              marginBottom: '0.5em'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}