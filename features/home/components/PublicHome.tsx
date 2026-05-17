'use client'

import Link from 'next/link'

import { Button, Chip } from '@heroui/react'
import { BookOpenIcon, FolderOpenIcon, SearchIcon, SparklesIcon } from 'lucide-react'

import type { FlattenedItem } from '@/features/documents'

export function PublicHome({ flattenedItems }: { flattenedItems: FlattenedItem[] }) {
    const totalItems = flattenedItems.length
    const totalFiles = flattenedItems.filter(item => item.type === 'file').length
    const totalFolders = flattenedItems.filter(item => item.type === 'folder').length

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-14 text-center backdrop-blur md:px-10">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center">
                <Chip
                    variant="flat"
                    color="primary"
                    startContent={<SparklesIcon className="h-3.5 w-3.5" />}
                    className="mb-5"
                >
                    Thư viện tài liệu học tập
                </Chip>

                <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Open Document</h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                    Khám phá, tìm kiếm và xem nhanh tài liệu học tập trong một giao diện hiện đại, rõ ràng và dễ sử
                    dụng.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                        as={Link}
                        href="/documents"
                        color="primary"
                        radius="full"
                        size="lg"
                        startContent={<BookOpenIcon className="h-4 w-4" />}
                        className="font-semibold shadow-lg shadow-primary/25"
                    >
                        Mở thư viện
                    </Button>

                    <Button
                        as={Link}
                        href="/documents"
                        variant="bordered"
                        radius="full"
                        size="lg"
                        startContent={<SearchIcon className="h-4 w-4" />}
                        className="border-slate-200 bg-white/70 font-semibold"
                    >
                        Tìm tài liệu
                    </Button>
                </div>

                <div className="mt-10 grid w-full gap-3 sm:grid-cols-3">
                    <StatCard label="Tổng mục" value={totalItems} icon={<BookOpenIcon />} />
                    <StatCard label="Tệp tài liệu" value={totalFiles} icon={<SearchIcon />} />
                    <StatCard label="Thư mục" value={totalFolders} icon={<FolderOpenIcon />} />
                </div>
            </div>
        </section>
    )
}

function StatCard({ label, value, icon }: { label: string; value: number; icon: React.ReactElement }) {
    return (
        <div className="rounded-3xl border border-slate-200/70 bg-white/75 p-5 shadow-sm backdrop-blur">
            <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                {icon}
            </div>
            <div className="text-2xl font-black text-slate-950">{value}</div>
            <div className="mt-1 text-sm font-medium text-slate-500">{label}</div>
        </div>
    )
}
