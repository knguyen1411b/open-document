'use client'

import { useDeferredValue, useMemo, useState } from 'react'

import { Card, CardBody, CardFooter, CardHeader, Chip, Input } from '@heroui/react'
import { FolderOpenIcon, SearchIcon } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout'
import type { FlattenedItem, Item } from '@/features/documents'

import { normalizeSearch } from '../utils/normalizeSearch'
import DocumentList from './DocumentList'
import EmptyState from './ui/EmptyState'

type DocumentExplorerProps = {
    items: Item[]
    pathSegments: string[]
    searchItems: FlattenedItem[]
}

export default function DocumentExplorer({ items, pathSegments, searchItems }: DocumentExplorerProps) {
    const [query, setQuery] = useState('')
    const deferredQuery = useDeferredValue(query)

    const normalizedQuery = useMemo(() => normalizeSearch(deferredQuery), [deferredQuery])

    const filteredSearchItems = useMemo(() => {
        if (!normalizedQuery) return searchItems

        return searchItems.filter(item =>
            normalizeSearch(`${item.name} ${item.pathNames?.join(' ') ?? ''}`).includes(normalizedQuery)
        )
    }, [normalizedQuery, searchItems])

    const showSearchResults = normalizedQuery.length > 0
    const currentItems = showSearchResults ? filteredSearchItems : items
    const totalCount = showSearchResults ? searchItems.length : items.length
    const visibleCount = currentItems.length

    return (
        <section className="container flex flex-col gap-6 py-8 overflow-x-hidden">
            <Card className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 shadow-lg shadow-slate-200/50 backdrop-blur">
                <CardHeader className="px-5 pb-0 pt-5">
                    <div className="w-full rounded-2xl bg-slate-50/80 px-3 py-2">
                        <Breadcrumbs segments={pathSegments} />
                    </div>
                </CardHeader>

                <CardBody className="gap-4 px-5 py-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <Chip
                                variant="flat"
                                color="primary"
                                startContent={<FolderOpenIcon className="h-3.5 w-3.5 ml-2" />}
                                className="mb-3 font-semibold"
                            >
                                Thư viện tài liệu
                            </Chip>

                            <h1 className="text-2xl font-black tracking-tight text-slate-950">
                                {showSearchResults ? 'Kết quả tìm kiếm' : 'Danh sách tài liệu'}
                            </h1>

                            <p className="mt-1 text-sm text-slate-500">
                                {showSearchResults
                                    ? `Đang tìm theo từ khóa “${query}”.`
                                    : 'Duyệt thư mục, xem nhanh và tải xuống tài liệu.'}
                            </p>
                        </div>

                        <Chip variant="flat" className="w-fit bg-slate-100 font-bold text-slate-700">
                            {showSearchResults ? `${visibleCount} / ${totalCount} kết quả` : `${totalCount} mục`}
                        </Chip>
                    </div>
                </CardBody>

                <CardFooter className="px-5 pb-5 pt-0">
                    <Input
                        isClearable
                        aria-label="Tìm tài liệu"
                        type="search"
                        value={query}
                        variant="bordered"
                        startContent={<SearchIcon className="h-4 w-4 text-slate-400" />}
                        onChange={event => setQuery(event.target.value)}
                        onClear={() => setQuery('')}
                        placeholder="Tìm theo tên thư mục hoặc tên tệp..."
                        radius="full"
                        classNames={{
                            inputWrapper:
                                'h-12 border-slate-200 bg-white shadow-sm hover:border-primary/40 data-[focus=true]:border-primary',
                            input: 'text-sm'
                        }}
                    />
                </CardFooter>
            </Card>

            {showSearchResults && filteredSearchItems.length === 0 ? (
                <EmptyState />
            ) : (
                <DocumentList items={currentItems} baseSegments={pathSegments} showPath={showSearchResults} />
            )}
        </section>
    )
}
