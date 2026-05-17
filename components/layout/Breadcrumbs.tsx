'use client'

import { useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { BreadcrumbItem as HeroBreadcrumbItem, Breadcrumbs as HeroBreadcrumbs } from '@heroui/react'
import { HomeIcon } from 'lucide-react'

import { slugify } from '@/utils/slugify'

type PublicBreadcrumbsProps = {
    segments?: string[]
    baseHref?: string
    className?: string
}

export function Breadcrumbs({ segments = [], baseHref = '/documents', className = '' }: PublicBreadcrumbsProps) {
    const { push } = useRouter()
    const items = useMemo(
        () => [
            {
                label: 'Tài liệu',
                href: baseHref
            },
            ...segments.map((segment, index) => ({
                label: decodeURIComponent(segment),
                href: `${baseHref}/${segments
                    .slice(0, index + 1)
                    .map(slugify)
                    .join('/')}`
            }))
        ],
        [segments, baseHref]
    )

    return (
        <HeroBreadcrumbs isDisabled={false} maxItems={4}>
            {items.map((item, index) => (
                <HeroBreadcrumbItem key={index} className={className} onClick={() => push(item.href)}>
                    {index === 0 ? (
                        <span className="inline-flex items-center gap-1">
                            <HomeIcon size={16} className="pb-px" /> {item.label}
                        </span>
                    ) : (
                        item.label
                    )}
                </HeroBreadcrumbItem>
            ))}
        </HeroBreadcrumbs>
    )
}
