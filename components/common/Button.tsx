import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
    solid:
        'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    outline:
        'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
    solid: {
        slate: 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
        dark: 'bg-slate-900 text-white hover:bg-slate-800 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
        /* blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
* white:
*     'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white', */
    },
    outline: {
        slate:
            'ring-slate-200 text-slate-700 dark:text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
        /* white:
*     'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white', */
    },
}

type VariantKey = keyof typeof variantStyles
type ColorKey<Variant extends VariantKey> =
    keyof (typeof variantStyles)[Variant]

type ButtonProps<
    Variant extends VariantKey,
    Color extends ColorKey<Variant>,
> = {
    variant?: Variant
    color?: Color
} & (
        | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
        | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
            href?: undefined
        })
    )

export function Button<
    Color extends ColorKey<Variant>,
    Variant extends VariantKey = 'solid',
>({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
    variant = variant ?? ('solid' as Variant)
    color = color ?? ('slate' as Color)

    className = clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className,
    )

    return typeof props.href === 'undefined' ? (
        <button className={className} {...props as any} />
    ) : (
        <Link className={className} {...props as any} />
    )
}
