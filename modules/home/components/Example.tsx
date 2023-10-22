import React from 'react'

export default function Example() {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
        <li>Software Engineer</li>
        <li>
          Based in Jakarta <span className="ml-1">🇮🇩</span>
        </li>
      </ul>
      <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quidem labore iure omnis necessitatibus vitae
        magnam nemo a architecto reprehenderit?{' '}
      </p>
    </div>
  )
}
