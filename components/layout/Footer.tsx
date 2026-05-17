'use client'

import Link from 'next/link'

import { User } from '@heroui/react'
import { BookOpenIcon, MailIcon, MapPinIcon } from 'lucide-react'

const quickLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/documents', label: 'Tài liệu' }
]

export function Footer() {
    return (
        <footer className="border-t border-slate-200/70 backdrop-blur-3xl bg-white/70">
            <div className="container py-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <Link href="/" className="w-fit">
                        <User
                            avatarProps={{
                                icon: <BookOpenIcon size={18} />,
                                className: 'bg-indigo-100 text-indigo-700'
                            }}
                            name={<h2 className="text-sm font-semibold text-slate-950">Open Document</h2>}
                            description={<p className="text-xs text-slate-500">Thư viện tài liệu học tập</p>}
                        />
                    </Link>

                    <div className="grid gap-8 sm:grid-cols-2 md:min-w-105">
                        <div>
                            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                                Điều hướng
                            </h3>

                            <div className="flex flex-col gap-2">
                                {quickLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                                Liên hệ
                            </h3>

                            <div className="space-y-2 text-sm text-slate-600">
                                <Link href="mailto:knguyen1411b@gmail.com" className="flex items-center gap-2">
                                    <MailIcon className="h-4 w-4 text-indigo-500" />
                                    knguyen1411b@gmail.com
                                </Link>

                                <p className="flex items-center gap-2">
                                    <MapPinIcon className="h-4 w-4 text-pink-500" />
                                    Huế, Việt Nam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-slate-200/70 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Open Document. All rights reserved.</p>
                    <p>Made by Khánh Nguyên</p>
                </div>
            </div>
        </footer>
    )
}
