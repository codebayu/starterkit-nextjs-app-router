'use client'

import React from 'react'

import { useCounter } from '@/stores/counter'

export default function Counter() {
  const { count, inc } = useCounter()
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
