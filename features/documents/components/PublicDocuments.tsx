import { Item } from '../types'
import { FlattenedItem } from '../utils/flatten-drive-items'
import DocumentExplorer from './DocumentExplorer'
import EmptyState from './ui/EmptyState'

type PublicDocumentsProps = {
    breadcrumbs: string[]
    items: Item[]
    flattenedItems: FlattenedItem[]
}

export function PublicDocuments({ breadcrumbs, items, flattenedItems }: PublicDocumentsProps) {
    if (items.length === 0) return <EmptyState root />
    return <DocumentExplorer items={items} pathSegments={breadcrumbs} searchItems={flattenedItems} />
}
