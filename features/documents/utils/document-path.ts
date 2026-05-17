import type { Item } from '@/features/documents'
import { slugify } from '@/utils/slugify'

export type DocumentCollectionItem = Item & {
    pathSegments?: string[]
    pathNames?: string[]
}

export function getDocumentHref(item: DocumentCollectionItem, baseSegments: string[] = []) {
    const itemSegments = [...baseSegments.map(slugify), slugify(item.name)]

    return `/documents/${itemSegments.join('/')}`
}

export function getDocumentPathLabel(item: DocumentCollectionItem, showPath: boolean) {
    if (!showPath || !item.pathNames?.length) {
        return undefined
    }

    return item.pathNames.join(' / ')
}
