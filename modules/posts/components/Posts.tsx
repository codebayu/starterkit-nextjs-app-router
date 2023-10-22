'use client'

import React from 'react'
import useSWR from 'swr'

import { IPost } from '@/common/types/posts'
import { fetcher } from '@/common/utils/fetcher'

export default function Posts() {
  const { data, isLoading } = useSWR('api/posts', fetcher)
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <h1>Example swr fetching</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.data.map((item: IPost) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  )
}
