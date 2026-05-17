'use client'

import { ReactNode } from 'react'

import { ReactLenis } from 'lenis/react'

import { Footer, Header } from '.'

export function LayoutShell({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root>
            <Header />
            <main>{children}</main>
            <Footer />
        </ReactLenis>
    )
}
