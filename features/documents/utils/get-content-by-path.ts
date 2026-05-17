import type { DriveItem, Item } from '@/features/documents'
import { slugify } from '@/utils/slugify'

type ContentByPathResult = {
    breadcrumbs: string[]
    items: Item[]
    isValid: boolean
}

export function getContentByPath(data: DriveItem[], path: string[] = []): ContentByPathResult {
    let currentLevel = data
    const breadcrumbs: string[] = []

    for (const segment of path) {
        const found = currentLevel.find(item => item.type === 'folder' && slugify(item.name) === segment)

        if (!found?.children) {
            return {
                breadcrumbs,
                items: [],
                isValid: false
            }
        }

        breadcrumbs.push(found.name)
        currentLevel = found.children
    }

    return {
        breadcrumbs,
        items: currentLevel.map(item => ({ id: item.id, name: item.name, type: item.type })),
        isValid: true
    }
}
