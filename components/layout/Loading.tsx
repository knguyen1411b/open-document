'use client'

import { Spinner } from '@heroui/react'

export function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Spinner />;
        </div>
    )
}
