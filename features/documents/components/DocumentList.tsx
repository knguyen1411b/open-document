import { getDownloadUrl, getPreviewUrl, getViewUrl } from '@/lib/file-url'

import { type DocumentCollectionItem, getDocumentHref, getDocumentPathLabel } from '../utils/document-path'
import DocumentCard from './DocumentCard'

type DocumentListProps = {
    items: DocumentCollectionItem[]
    baseSegments?: string[]
    showPath?: boolean
}

export default function DocumentList({ items, baseSegments = [], showPath = false }: DocumentListProps) {
    return (
        <ul className="grid gap-3 lg:gap-4">
            {items.map(item => {
                const isFile = item.type === 'file'

                return (
                    <DocumentCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        href={getDocumentHref(item, baseSegments)}
                        pathLabel={getDocumentPathLabel(item, showPath)}
                        downloadUrl={isFile ? getDownloadUrl(item.id) : undefined}
                        driveUrl={isFile ? getViewUrl(item.id) : undefined}
                        previewUrl={isFile ? getPreviewUrl(item.id) : undefined}
                    />
                )
            })}
        </ul>
    )
}
