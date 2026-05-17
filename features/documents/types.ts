export type DriveItemType = 'file' | 'folder'

export interface DriveItem {
    name: string
    id: string
    type: DriveItemType
    children?: DriveItem[]
}

export interface Item {
    name: string
    id: string
    type: DriveItemType
}
