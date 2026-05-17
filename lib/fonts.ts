import { Fraunces, JetBrains_Mono, Manrope } from 'next/font/google'

import { cn } from '@/utils/cn'

const fontSans = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
})

const fontMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap'
})

const fontDisplay = Fraunces({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap'
})

export const fontVariables = cn(fontSans.variable, fontMono.variable, fontDisplay.variable)
