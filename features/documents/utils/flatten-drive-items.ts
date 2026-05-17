import type { DriveItem, DriveItemType } from '@/features/documents'
import { slugify } from '@/utils/slugify'

export type FlattenedItem = {
    id: string
    name: string
    type: DriveItemType
    pathSegments: string[]
    pathNames: string[]
}

export function flattenDriveItems(data: DriveItem[]): FlattenedItem[] {
    const results: FlattenedItem[] = []

    function walk(items: DriveItem[], parentSegments: string[] = [], parentNames: string[] = []) {
        for (const item of items) {
            const pathSegments = [...parentSegments, slugify(item.name)]
            const pathNames = [...parentNames, item.name]

            results.push({
                id: item.id,
                name: item.name,
                type: item.type,
                pathSegments,
                pathNames
            })

            if (item.type === 'folder' && item.children?.length) {
                walk(item.children, pathSegments, pathNames)
            }
        }
    }

    walk(data)

    return results
}
