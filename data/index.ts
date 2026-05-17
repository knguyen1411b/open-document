import fs from 'fs'
import path from 'path'

import type { DriveItem } from '@/features/documents'

const filePath = path.join(process.cwd(), 'data', 'data.enc')

const encoded = fs.readFileSync(filePath, 'utf8')

const decoded = Buffer.from(encoded, 'base64').toString('utf8')

const rawData = JSON.parse(decoded)

const data: DriveItem[] = rawData as DriveItem[]

export default data
