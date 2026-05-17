'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button, User } from '@heroui/react'
import { BookOpenIcon, HomeIcon } from 'lucide-react'

import GithubButton from '@/components/ui/GithubButton'

export function Header() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-999 backdrop-blur-3xl">
            <div className="container flex h-16 items-center justify-between gap-4">
                <div className="w-50">
                    <Link href="/" className="w-fit">
                        <User
                            avatarProps={{
                                icon: <BookOpenIcon size={18} />,
                                className: 'bg-indigo-100 text-indigo-700'
                            }}
                            name={<h1 className="text-sm font-semibold">Open Document</h1>}
                            description={
                                <p className="text-xs text-default-500 line-clamp-1">Thư viện tài liệu học tập</p>
                            }
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm backdrop-blur-xl md:flex">
                    <Button
                        as={Link}
                        href="/"
                        size="sm"
                        radius="full"
                        color={pathname === '/' ? 'primary' : 'default'}
                        variant={pathname === '/' ? 'solid' : 'light'}
                        startContent={<HomeIcon className="h-4 w-4" />}
                        className="px-4 font-semibold"
                    >
                        Trang chủ
                    </Button>

                    <Button
                        as={Link}
                        href="/documents"
                        size="sm"
                        radius="full"
                        color={pathname !== '/' ? 'primary' : 'default'}
                        variant={pathname !== '/' ? 'solid' : 'light'}
                        startContent={<BookOpenIcon className="h-4 w-4" />}
                        className="px-4 font-semibold"
                    >
                        Tài liệu
                    </Button>
                </div>
                <div className="w-50 flex items-center justify-end">
                    <GithubButton />
                </div>
            </div>
        </header>
    )
}
