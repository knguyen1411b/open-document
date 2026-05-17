'use client'

import Link from 'next/link'

import { Button, ButtonGroup, Card, CardBody, Tooltip } from '@heroui/react'
import { ArrowRightIcon, DownloadIcon, ExternalLinkIcon, FileIcon, FolderIcon } from 'lucide-react'

import type { DriveItemType } from '@/features/documents'
import { cn } from '@/utils/cn'

import PreviewButton from './ui/PreviewButton'
import ShareButton from './ui/ShareButton'

type DocumentCardProps = {
    id: string
    name: string
    type: DriveItemType
    href: string
    pathLabel?: string
    downloadUrl?: string
    previewUrl?: string
    driveUrl?: string
}

export default function DocumentCard({
    id,
    name,
    type,
    href,
    pathLabel,
    downloadUrl,
    driveUrl,
    previewUrl
}: DocumentCardProps) {
    const isFolder = type === 'folder'

    const content = (
        <Card className="rounded-[28px] group overflow-hidden border border-slate-200/70 bg-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-200/60">
            <CardBody className="p-5">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                        <div
                            className={cn(
                                'grid h-14 w-14 shrink-0 place-items-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105',
                                isFolder
                                    ? 'bg-indigo-50 text-indigo-700 ring-indigo-100'
                                    : 'bg-sky-50 text-sky-700 ring-sky-100'
                            )}
                        >
                            {isFolder ? <FolderIcon className="h-6 w-6" /> : <FileIcon className="h-6 w-6" />}
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3
                                className="line-clamp-2 wrap-break-word max-w-55 truncate text-sm font-bold tracking-tight text-slate-950 sm:text-base "
                                title={name}
                            >
                                {name}
                            </h3>

                            {pathLabel && (
                                <p
                                    className="mt-1 max-w-55truncate text-xs leading-5 text-slate-500 sm:max-w-[320px]"
                                    title={pathLabel}
                                >
                                    {pathLabel}
                                </p>
                            )}

                            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary ">
                                {isFolder ? 'Mở thư mục' : 'Xem nhanh • Drive • Tải xuống'}

                                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </div>
                        </div>
                    </div>

                    {!isFolder && (
                        <ButtonGroup variant="flat">
                            {previewUrl && (
                                <Tooltip content="Xem nhanh">
                                    <PreviewButton previewUrl={previewUrl} />
                                </Tooltip>
                            )}

                            {driveUrl && (
                                <Tooltip content="Mở bằng Drive">
                                    <Button isIconOnly radius="full" as="a" href={driveUrl} target="_blank">
                                        <ExternalLinkIcon className="h-4 w-4" />
                                    </Button>
                                </Tooltip>
                            )}

                            {downloadUrl && (
                                <Tooltip content="Tải xuống">
                                    <Button isIconOnly radius="full" as="a" href={downloadUrl} download>
                                        <DownloadIcon className="h-4 w-4" />
                                    </Button>
                                </Tooltip>
                            )}

                            <Tooltip content="Chia sẻ">
                                <ShareButton />
                            </Tooltip>
                        </ButtonGroup>
                    )}
                </div>
            </CardBody>
        </Card>
    )

    return <li key={id}>{isFolder ? <Link href={href}>{content}</Link> : content}</li>
}
