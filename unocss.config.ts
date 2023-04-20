import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-100',
    'border-dark-only': 'border-transparent dark:border-dark-100',
    'bg-base': 'bg-white dark:bg-[#232323]',
    'color-base': 'text-gray-900 dark:text-gray-300',
    'color-fade': 'text-gray-900:50 dark:text-gray-300:50',
    'icon-button': 'op50 hover:op100 my-auto',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
