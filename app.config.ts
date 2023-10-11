export default defineAppConfig({
  ui: {
    strategy: 'override',
    icon: 'mdi',
    primary: 'main',
    colors: ['grey', 'success', 'critical', 'warning', 'interactive', 'primary'],

    // Buton Preset
    button: {
      rounded: 'rounded-lg',
      font: 'font-semibold',
      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-base',
      },
      padding: {
        'sm': 'px-3 py-2',
        'md': 'px-3 py-2.5',
        'lg': 'px-4 py-2.5',
        'xl': 'px-4.5 py-3',
        '2xl': 'px-5 py-4',
      },
      variant: {
        solid: [
          // default
          'shadow-sm',
          'text-white',
          'bg-{color}-500',
          'outline-none',
          'transition-all',
          'duration-200',

          // hover
          'hover:bg-{color}-600',

          // disabled
          'disabled:pointer-events-none',
          'disabled:bg-default-disabled',
          'disabled:text-disabled',

          // focus
          'focus:ring-4',
          'focus:ring-{color}-500/30',
          'focus:!bg-{color}-500',
        ].join(' '),
        outline:
          [
            // default
            'border',
            'border-current',
            'text-{color}-500',

            // hover
            'hover:text-{color}-600',

            // disabled
            'disabled:pointer-events-none',
            'disabled:border-disabled',
            'disabled:text-disabled',

            // focus
            'focus:ring-4',
            'focus:ring-{color}-500/30',
            'focus:text-{color}-500',
          ].join(' '),
      },
      default: {
        loadingIcon: 'i-mdi-loading',
      },
    },
    // Input Preset
    input: {
      placeholder: 'placeholder-black-400',
      rounded: 'rounded-lg',
      color: {
        white: {
          outline: [
            // default
            'shadow-sm',
            'bg-transparent',
            'text-default',
            'border',
            'border-default',

            // focus
            'focus:ring-4',
            'focus:ring-blue-200/20',

            // disabled
            'disabled:border-disabled',
            'disabled:text-disabled',
          ].join(' '),
        },
      },
      padding: {
        md: 'py-2 px-3.5',
      },
      default: {
        size: 'md',
        loadingIcon: 'i-mdi-loading',
      },
    },

  },
})
