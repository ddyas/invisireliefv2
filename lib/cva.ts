// Simple alternative to class-variance-authority for basic variant handling
export type VariantProps<T extends (...args: any) => any> = Partial<{
  [K in keyof Parameters<T>[0]]: Parameters<T>[0][K]
}>

export function cva(
  base: string,
  config?: {
    variants?: Record<string, Record<string, string>>
    defaultVariants?: Record<string, string>
  },
) {
  return (props: Record<string, any> = {}) => {
    let classes = base

    if (config?.variants) {
      Object.entries(config.variants).forEach(([key, variants]) => {
        const value = props[key] ?? config.defaultVariants?.[key]
        if (value && variants[value]) {
          classes += ` ${variants[value]}`
        }
      })
    }

    return classes
  }
}
