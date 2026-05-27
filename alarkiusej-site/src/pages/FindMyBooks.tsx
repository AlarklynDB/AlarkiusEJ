import { useEffect, useState } from 'react'

const BN_URL = 'https://www.barnesandnoble.com/search?q=Alarkius%20Elvya%20Jay&contributorName=alarkius-elvya-jay'

export default function FindMyBooks() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count <= 0) {
      window.location.replace(BN_URL)
      return
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ink gap-6 px-6 text-center">
      <h1 className="font-serif text-3xl text-text">Finding My Books...</h1>
      <p className="text-text-muted text-sm max-w-sm">
        You're being redirected to my Barnes &amp; Noble author page. Hang tight!
      </p>
      <div className="w-20 h-20 rounded-full border-4 border-rose-light flex items-center justify-center">
        <span className="text-rose-light text-3xl font-bold font-serif">{count}</span>
      </div>
      <p className="text-text-faint text-xs">Redirecting in {count} second{count !== 1 ? 's' : ''}...</p>
      <a
        href={BN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-light text-sm underline underline-offset-4 hover:text-text transition-colors"
      >
        Go now →
      </a>
    </div>
  )
}
