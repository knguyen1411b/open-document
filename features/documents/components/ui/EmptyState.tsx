'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { Button, Card, CardBody } from '@heroui/react'
import { FolderOpenIcon, HomeIcon } from 'lucide-react'

type EmptyStateProps = {
    root?: boolean
}

export default function EmptyState({ root = false }: EmptyStateProps) {
    const { back, push } = useRouter()

    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        if (!root) return
        const interval = window.setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    push('/')
                    return 0
                }

                return prev - 1
            })
        }, 1000)

        return () => window.clearInterval(interval)
    }, [back, push, root])

    return (
        <Card className="rounded-2xl">
            <CardBody className="py-12 relative mx-auto flex max-w-lg flex-col items-center text-center">
                <div className="mb-6 grid h-22 w-22 place-items-center rounded-[28px] bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <FolderOpenIcon className="h-10 w-10" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                    {root ? 'Không có tài liệu công khai' : 'Thư mục hiện đang trống'}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    {root
                        ? 'Hiện chưa có tài liệu nào được chia sẻ công khai. Hãy quay lại sau hoặc khám phá các khu vực khác.'
                        : 'Thư mục này chưa có nội dung hiển thị. Bạn có thể quay lại để tiếp tục khám phá tài liệu khác.'}
                </p>

                <div className="mt-8">
                    {root && (
                        <Button
                            color="primary"
                            radius="full"
                            startContent={<HomeIcon className="h-4 w-4" />}
                            onPress={() => push('/')}
                            className="px-5 font-semibold shadow-lg shadow-primary/20"
                        >
                            Quay lại trang chủ ({countdown})
                        </Button>
                    )}
                </div>
            </CardBody>
        </Card>
    )
}
