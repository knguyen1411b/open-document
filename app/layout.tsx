import type { Metadata } from 'next'

import { fontVariables } from '@/lib/fonts'
import { cn } from '@/utils/cn'

import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
    title: {
        default: 'Thư viện tài liệu',
        template: '%s | Thư viện tài liệu'
    },
    description: 'Thư viện tài liệu học tập với giao diện hiện đại, dễ tìm kiếm và dễ sử dụng.',
    openGraph: {
        title: 'Thư viện tài liệu',
        description: 'Thư viện tài liệu học tập với giao diện hiện đại, dễ tìm kiếm và dễ sử dụng.',
        type: 'website',
        locale: 'vi_VN'
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="vi" className={cn('antialiased', fontVariables)}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
