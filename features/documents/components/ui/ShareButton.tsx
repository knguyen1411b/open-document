'use client'

import { useEffect, useState } from 'react'

import { Button, addToast } from '@heroui/react'
import { CheckIcon, Share2Icon } from 'lucide-react'

export default function ShareButton() {
    const [status, setStatus] = useState<'idle' | 'success'>('idle')

    useEffect(() => {
        if (status !== 'success') return

        const timeout = window.setTimeout(() => {
            setStatus('idle')
        }, 1800)

        return () => window.clearTimeout(timeout)
    }, [status])

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setStatus('success')
            addToast({
                title: 'Đã sao chép liên kết',
                description: 'Bạn có thể dán liên kết để chia sẻ.',
                color: 'success'
            })
        } catch {
            addToast({
                title: 'Không thể chia sẻ',
                description: 'Vui lòng thử lại.',
                color: 'danger'
            })
        }
    }

    return (
        <Button isIconOnly radius="full" onPress={handleShare}>
            {status === 'success' ? (
                <CheckIcon className="h-4 w-4 text-emerald-600" />
            ) : (
                <Share2Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            )}
        </Button>
    )
}
