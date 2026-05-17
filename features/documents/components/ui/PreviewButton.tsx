'use client'

import { useState } from 'react'

import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react'
import { EyeIcon } from 'lucide-react'

type PreviewButtonProps = {
    previewUrl: string
}

export default function PreviewButton({ previewUrl }: PreviewButtonProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button isIconOnly radius="full" variant="flat" onPress={() => setOpen(true)}>
                <EyeIcon className="h-4 w-4" />
            </Button>

            <Modal
                isOpen={open}
                onOpenChange={setOpen}
                size="4xl"
                scrollBehavior="inside"
                backdrop="blur"
                className="z-9999!"
                placement="center"
            >
                <ModalContent>
                    <ModalHeader className="text-sm font-semibold text-slate-900">Xem trước tài liệu</ModalHeader>

                    <ModalBody>
                        <iframe src={previewUrl} className="h-[80vh] w-full" allow="autoplay" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
