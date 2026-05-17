import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { LayoutShell } from '@/components/layout'
import data from '@/data'
import {
    PublicDocuments,
    buildDocumentMetadata,
    buildStaticDocumentPaths,
    flattenDriveItems,
    getContentByPath
} from '@/features/documents'

type PageProps = {
    params: Promise<{
        id?: string[]
    }>
}

export function generateStaticParams() {
    return buildStaticDocumentPaths(data)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id = [] } = await params
    return buildDocumentMetadata(data, id)
}

export default async function DocumentsPage({ params }: PageProps) {
    const { id = [] } = await params

    const { breadcrumbs, items, isValid } = getContentByPath(data, id)

    if (!isValid) {
        notFound()
    }

    return (
        <LayoutShell>
            <PublicDocuments breadcrumbs={breadcrumbs} items={items} flattenedItems={flattenDriveItems(data)} />
        </LayoutShell>
    )
}
