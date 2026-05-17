'use client'

import React, { Component, ReactNode } from 'react'

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { AlertTriangleIcon, RefreshCwIcon } from 'lucide-react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface State {
    hasError: boolean
    error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
        this.props.onError?.(error, errorInfo)
    }

    private handleRetry = () => {
        this.setState({
            hasError: false,
            error: null
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback ?? (
                    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-rose-50 via-white to-pink-50 px-4">
                        <Card className="w-full max-w-md border border-rose-100 bg-white/85 shadow-xl backdrop-blur-md">
                            <CardHeader className="flex gap-4 pb-2">
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-100 text-rose-600">
                                    <AlertTriangleIcon className="h-6 w-6" />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-950">Có lỗi xảy ra</h2>
                                    <p className="text-sm font-medium text-slate-500">
                                        Ứng dụng gặp sự cố khi hiển thị nội dung.
                                    </p>
                                </div>
                            </CardHeader>

                            <CardBody>
                                <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3">
                                    <p className="text-sm leading-6 text-rose-700">
                                        {this.state.error?.message ?? 'Lỗi không xác định'}
                                    </p>
                                </div>
                            </CardBody>

                            <CardFooter className="flex w-full justify-center">
                                <Button
                                    color="danger"
                                    radius="full"
                                    startContent={<RefreshCwIcon className="h-4 w-4" />}
                                    onPress={this.handleRetry}
                                    className="font-semibold"
                                >
                                    Thử lại
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                )
            )
        }

        return this.props.children
    }
}
