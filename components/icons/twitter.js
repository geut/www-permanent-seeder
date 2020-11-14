import React from 'react'

export default function Twitter ({ alt, ...props }) {
  return (
    <svg {...props} viewBox='0 0 11 9' xmlns='http://www.w3.org/2000/svg'>
      {alt && <title>{alt}</title>}
      <path d='M11 1.029L9.969 2.058v.171c0 .188-.03.368-.075.542-.024 1.415-.475 3.292-2.332 4.773C3.913 10.458 0 7.887 0 7.887c3.094 0 3.094-1.029 3.094-1.029-.688 0-2.063-1.371-2.063-1.371.344.342 1.032 0 1.032 0C.343 4.458.343 3.429.343 3.429c.344.343 1.032 0 1.032 0C-.344 2.058.687.343.687.343c.344 1.715 4.813 2.4 4.813 2.4l.057-.028a4.056 4.056 0 0 1-.057-.657C5.5.827 6.5 0 7.734 0c.68 0 1.28.309 1.69.786l.201-.1L10.656 0 9.97 1.372 11 1.029z' />
    </svg>
  )
}
