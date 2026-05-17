import { DriveItem } from '@/features/documents'
import { slugify } from '@/utils/slugify'

export function buildStaticDocumentPaths(items: DriveItem[], parent: string[] = []): { id?: string[] }[] {
    const paths: { id?: string[] }[] = [{ id: parent }]

    for (const item of items) {
        if (item.type === 'folder' && item.children) {
            const currentPath = [...parent, slugify(item.name)]
            paths.push(...buildStaticDocumentPaths(item.children, currentPath))
        }
    }

    return paths
}
