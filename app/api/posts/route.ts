import { NextResponse } from 'next/server'

import { getPostServices } from '@/services/posts'

export const GET = async () => {
  try {
    const response = await getPostServices()
    return NextResponse.json({ status: true, data: response }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 })
  }
}
