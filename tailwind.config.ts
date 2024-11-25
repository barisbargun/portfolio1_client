/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable unicorn/prefer-module */

import { toSrcset as svgToDataUri } from 'mini-svg-data-uri'
import type { Config } from 'tailwindcss'
import * as colors from 'tailwindcss/colors'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

const config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1450px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sourceCodePro: ['Source Code Pro', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      dropShadow: {
        whiteGlow: ['0 0px 20px rgba(255, 255, 255, 0.20)', '0 0px 65px rgba(255, 255, 255, 0.10)'],
        indigoGlow: ['0 0px 20px rgb(79, 70, 229,0.30)', '0 0px 65px rgb(79, 70, 229, 0.16)']
      },
      animation: {
        shine: 'shine 5s linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'meteor-effect': 'meteor 5s linear infinite'
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0%' },
          '75%': { backgroundPosition: '-200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': { '@apply flex items-center justify-center': {} },
        '.shadowCard': { '@apply shadow-md dark:shadow-card': {} },

        /* PAGE SPACE */
        '.content-space': { '@apply mt-8 lg:mt-12 xl:mt-16': {} },
        '.content-space-lg': { '@apply mt-12 lg:mt-16 xl:mt-20': {} }
      })
    },
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }
  ]
} satisfies Config

export default config
