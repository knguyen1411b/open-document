import { LayoutShell } from '@/components/layout'
import data from '@/data'
import { flattenDriveItems } from '@/features/documents'
import { PublicHome } from '@/features/home'

export default function HomePage() {
    return (
        <LayoutShell>
            <PublicHome flattenedItems={flattenDriveItems(data)} />
        </LayoutShell>
    )
}
