import colors from 'tailwindcss/colors'
// eslint-disable-next-line @typescript-eslint/no-var-requires

const reverseColors = (m: object) => {
  const keys = Object.keys(m)
  const reversedValues = Object.values(m).reverse()
  const obj = {}
  keys.forEach((e: string, i: number) => {
    obj[e] = reversedValues[i]
  })
  return obj
}

export default {
  // important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            base: colors.red
          }
        }
      },
      themes: [
        {
          name: 'light',
          extend: {
            colors: {
              base: colors.stone
            }
          }
        },
        {
          name: 'dark',
          extend: {
            colors: {
              base: reverseColors(colors.zinc)
            }
          }
        },
        {
          name: 'sky',
          extend: {
            colors: {
              base: reverseColors(colors.sky)
            }
          }
        }
      ]
    }),

    // eslint-disable-next-line global-require
    require('tailwind-scrollbar')
  ]
}
