'use client'

import { ReactNode } from 'react'

import { useRouter } from 'next/navigation'

import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { Analytics } from '@vercel/analytics/next'
import { X } from 'lucide-react'

import { ErrorBoundary } from '@/components/layout'

export default function Providers({ children }: { children: ReactNode }) {
    const router = useRouter()
    return (
        <ErrorBoundary>
            <HeroUIProvider navigate={router.push}>
                {children}
                <ToastProvider
                    placement="bottom-right"
                    maxVisibleToasts={2}
                    toastOffset={20}
                    toastProps={{
                        timeout: 3000,
                        classNames: {
                            closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2'
                        },
                        shouldShowTimeoutProgress: true,
                        closeIcon: <X size={24} />
                    }}
                />
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </HeroUIProvider>
        </ErrorBoundary>
    )
}
