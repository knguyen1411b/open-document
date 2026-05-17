import type { Metadata } from 'next'

import { DriveItem } from '@/features/documents'

import { getContentByPath } from './get-content-by-path'

export async function buildDocumentMetadata(data: DriveItem[], path: string[]): Promise<Metadata> {
    await new Promise(resolve => setTimeout(resolve, 1))

    const { breadcrumbs, isValid } = getContentByPath(data, path)

    const currentTitle = breadcrumbs.length ? breadcrumbs[breadcrumbs.length - 1] : 'Tất cả danh mục'

    if (!isValid) {
        return {
            title: 'Không tìm thấy tài liệu',
            description: 'Trang tài liệu bạn đang tìm không tồn tại hoặc đã được thay đổi.'
        }
    }

    const description = breadcrumbs.length
        ? `Khám phá tài liệu trong thư mục ${currentTitle}. Mở thư mục con, tìm kiếm tệp, xem PDF trực tiếp và tải xuống nhanh hơn.`
        : 'Khám phá toàn bộ thư viện tài liệu, tìm theo tên môn học, thư mục và tệp, đồng thời xem PDF trực tiếp ngay trên web.'

    return {
        title: currentTitle,
        description,
        openGraph: {
            title: currentTitle,
            description,
            type: 'website'
        }
    }
}
