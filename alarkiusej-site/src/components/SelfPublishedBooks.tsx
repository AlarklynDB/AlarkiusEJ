import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from '../lib/router'

// Shared Shopify Storefront client config
const SHOPIFY_DOMAIN = '3ed71a-4.myshopify.com'
const SHOPIFY_TOKEN = '5735230c53c0a7ac626a2f9ccdc10815'
const SCRIPT_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

// Site palette (matches tailwind.config.mjs)
const C = {
  ink: '#191919',
  inkLight: '#1f1f1f',
  surface: '#252525',
  surfaceRaised: '#2e2e2e',
  border: '#3a3a3a',
  text: '#e8e3dc',
  textMuted: '#9e9890',
  textFaint: '#6b6560',
  orange: '#bd733f',
  orangeHover: '#aa6839',
}

// Shared Buy Button UI options — orange buttons, dark-themed cart
const buyButtonOptions = {
  product: {
    styles: {
      product: {
        // Each product sits in its own grid cell, so let it fill the cell
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0',
          'margin-bottom': '0',
        },
      },
      title: {
        'font-family': 'Crimson Text, serif',
        'font-weight': 'normal',
        'font-size': '15px',
        color: C.text,
      },
      button: {
        'font-family': 'Avant Garde, sans-serif',
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        ':hover': {
          'background-color': C.orangeHover,
        },
        'background-color': C.orange,
        ':focus': {
          'background-color': C.orangeHover,
        },
        'border-radius': '0px',
        'padding-left': '63px',
        'padding-right': '63px',
      },
      quantityInput: {
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
      },
      price: {
        'font-family': 'Crimson Text, serif',
        'font-size': '16px',
        color: C.text,
      },
      compareAt: {
        'font-family': 'Crimson Text, serif',
        'font-size': '13.6px',
        color: C.textMuted,
      },
      unitPrice: {
        'font-family': 'Crimson Text, serif',
        'font-size': '13.6px',
        color: C.textMuted,
      },
    },
    contents: {
      button: true,
      buttonWithQuantity: false,
    },
    text: {
      button: 'LOCK THAT BOOK IN!',
    },
    googleFonts: ['Crimson Text'],
  },
  productSet: {
    styles: {
      products: {
        '@media (min-width: 601px)': {
          'margin-left': '0',
        },
      },
    },
  },
  modalProduct: {
    contents: {
      img: false,
      imgWithCarousel: true,
      button: false,
      buttonWithQuantity: true,
    },
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0px',
          'margin-bottom': '0px',
        },
      },
      button: {
        'font-family': 'Avant Garde, sans-serif',
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        ':hover': {
          'background-color': C.orangeHover,
        },
        'background-color': C.orange,
        ':focus': {
          'background-color': C.orangeHover,
        },
        'border-radius': '0px',
        'padding-left': '63px',
        'padding-right': '63px',
      },
      quantityInput: {
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
      },
      title: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'bold',
        'font-size': '26px',
        color: C.text,
      },
      price: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '18px',
        color: C.text,
      },
      compareAt: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '15.3px',
        color: C.textMuted,
      },
      unitPrice: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '15.3px',
        color: C.textMuted,
      },
    },
    googleFonts: ['Crimson Text'],
    text: {
      button: 'Add to cart',
    },
  },
  modal: {
    styles: {
      modal: {
        'background-color': C.inkLight,
      },
    },
  },
  option: {
    styles: {
      label: {
        color: C.text,
      },
      select: {
        'background-color': C.surface,
        color: C.text,
        border: `1px solid ${C.border}`,
      },
    },
  },
  cart: {
    styles: {
      cart: {
        'background-color': C.inkLight,
      },
      header: {
        'background-color': C.inkLight,
        color: C.text,
      },
      title: {
        color: C.text,
        'font-family': 'Lora, Georgia, serif',
      },
      lineItems: {
        'background-color': C.inkLight,
      },
      footer: {
        'background-color': C.ink,
        'border-top': `1px solid ${C.border}`,
      },
      subtotalText: {
        color: C.textMuted,
      },
      subtotal: {
        color: C.text,
      },
      notice: {
        color: C.textFaint,
      },
      currency: {
        color: C.text,
      },
      close: {
        color: C.textMuted,
        ':hover': {
          color: C.text,
        },
      },
      emptyCart: {
        color: C.textMuted,
      },
      noteDescription: {
        color: C.textMuted,
      },
      discountText: {
        color: C.textMuted,
      },
      discountAmount: {
        color: C.text,
      },
      button: {
        'font-family': 'Avant Garde, sans-serif',
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        ':hover': {
          'background-color': C.orangeHover,
        },
        'background-color': C.orange,
        ':focus': {
          'background-color': C.orangeHover,
        },
        'border-radius': '0px',
      },
    },
    text: {
      total: 'Subtotal',
      button: 'Checkout',
    },
    googleFonts: ['Crimson Text'],
  },
  lineItem: {
    styles: {
      lineItem: {
        'background-color': C.inkLight,
      },
      title: {
        color: C.text,
      },
      variantTitle: {
        color: C.textMuted,
      },
      price: {
        color: C.text,
      },
      fullPrice: {
        color: C.text,
      },
      discount: {
        color: C.textMuted,
      },
      discountIcon: {
        fill: C.textMuted,
      },
      quantity: {
        color: C.text,
      },
      quantityInput: {
        color: C.text,
        'background-color': C.surface,
        border: `1px solid ${C.border}`,
      },
      quantityButton: {
        color: C.text,
        'background-color': C.surface,
        border: `1px solid ${C.border}`,
        ':hover': {
          'background-color': C.surfaceRaised,
        },
      },
      quantityIncrement: {
        color: C.text,
        'background-color': C.surface,
        border: `1px solid ${C.border}`,
      },
      quantityDecrement: {
        color: C.text,
        'background-color': C.surface,
        border: `1px solid ${C.border}`,
      },
    },
  },
  toggle: {
    styles: {
      toggle: {
        'font-family': 'Avant Garde, sans-serif',
        'background-color': C.orange,
        ':hover': {
          'background-color': C.orangeHover,
        },
        ':focus': {
          'background-color': C.orangeHover,
        },
      },
      count: {
        'font-size': '14px',
      },
    },
    googleFonts: ['Crimson Text'],
  },
}

// All self-published books (Shopify product IDs). Each usage of
// <SelfPublishedBooks /> picks which subset it wants to mount via `bookKeys`.
const ALL_BOOKS = [
  { key: 'soft', id: '9492713472246', label: 'Hibryds I — Softcover' },
  { key: 'hard', id: '9492713767158', label: 'Hibryds I — Hardcover' },
  {
    key: 'tqctn',
    id: '9492714127606',
    label: 'TQCTN',
    ebookLink: 'https://play.google.com/store/books/details?id=XMECEgAAQBAJ',
  },
] as const

type BookKey = (typeof ALL_BOOKS)[number]['key']

// Loads the Shopify Buy SDK once and resolves with the built client
let shopifyClientPromise: Promise<any> | null = null

function getShopifyClient(): Promise<any> {
  if (shopifyClientPromise) return shopifyClientPromise

  shopifyClientPromise = new Promise((resolve, reject) => {
    function buildClient() {
      try {
        const client = (window as any).ShopifyBuy.buildClient({
          domain: SHOPIFY_DOMAIN,
          storefrontAccessToken: SHOPIFY_TOKEN,
        })
        resolve(client)
      } catch (err) {
        reject(err)
      }
    }

    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        buildClient()
      } else {
        loadScript(buildClient)
      }
    } else {
      loadScript(buildClient)
    }

    function loadScript(onLoad: () => void) {
      const existing = document.querySelector(`script[src="${SCRIPT_URL}"]`)
      if (existing) {
        existing.addEventListener('load', onLoad)
        return
      }
      const script = document.createElement('script')
      script.async = true
      script.src = SCRIPT_URL
      ;(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script)
      script.onload = onLoad
    }
  })

  return shopifyClientPromise
}

interface SelfPublishedBooksProps {
  /** Which books this instance mounts (a page can have multiple instances, each with its own subset). */
  bookKeys: BookKey[]
  eyebrow?: string
  heading?: string
  description?: ReactNode
  /** Shows the "...view the full bookstore" link. Turn off when already on /bookstore. */
  showBookstoreLink?: boolean
  /** Hash anchor this section responds to / scrolls to, e.g. "books", "hibrythian-books". */
  anchorId?: string
}

export default function SelfPublishedBooks({
  bookKeys,
  eyebrow = 'Self Published Books',
  heading = 'Official Author Exclusive Originals!',
  description = (
    <>Books from both my IPs, The Hibrythian Saga, The Naiseikai Universe.....and more...!</>
  ),
  showBookstoreLink = true,
  anchorId = 'books',
}: SelfPublishedBooksProps) {
  const books = ALL_BOOKS.filter((b) => bookKeys.includes(b.key))
  const [mounted, setMounted] = useState<Record<string, boolean>>({})
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const uiRef = useRef<any>(null)
  const mountedRef = useRef<Record<string, boolean>>({})

  useEffect(() => {
    let cancelled = false

    getShopifyClient().then((client) => {
      if (cancelled) return
      ;(window as any).ShopifyBuy.UI.onReady(client).then(async (ui: any) => {
        if (cancelled) return
        uiRef.current = ui
        // Shopify's SDK does not reliably handle overlapping createComponent()
        // calls, so mount each book one at a time, waiting for each to
        // actually render into the DOM before starting the next.
        for (const book of books) {
          await mountBook(book.key)
          if (cancelled) return
          // Small breather so the SDK fully settles between mounts
          await new Promise((r) => setTimeout(r, 250))
          if (cancelled) return
        }

        // The section grows as the cards render, so if we arrived via the
        // matching hash, re-settle the scroll position once everything's in place.
        if (window.location.hash === `#${anchorId}`) {
          scrollToBooks()
        }
      })
    })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Smooth-scrolls so the section lands just below the fixed navbar with a
  // little breathing room, leaving the whole section in view.
  function scrollToBooks() {
    const el = document.getElementById(anchorId)
    if (!el) return false

    // Measure the fixed navbar instead of hardcoding its height
    const nav = document.querySelector('nav, header')
    const navHeight = nav ? Math.round(nav.getBoundingClientRect().height) : 64
    const breathingRoom = 20

    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - breathingRoom

    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    return true
  }

  // If the page was opened at this section's hash, scroll there once it exists.
  // Needed because Astro hydrates React after the initial HTML paint, so the
  // browser's native hash jump can fire before this section is on the page.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash !== `#${anchorId}`) return

    let attempts = 0
    const interval = setInterval(() => {
      if (scrollToBooks() || ++attempts > 40) {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Handle in-page hash links (and back/forward hash changes) smoothly
  useEffect(() => {
    if (typeof window === 'undefined') return

    function onHashChange() {
      if (window.location.hash === `#${anchorId}`) {
        scrollToBooks()
      }
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Waits until the SDK has actually injected content into the node.
  // Does not depend on createComponent() returning a real promise, since
  // that varies between Buy Button SDK versions.
  function waitForRender(node: HTMLDivElement, timeoutMs = 10000): Promise<boolean> {
    return new Promise((resolve) => {
      if (node.children.length > 0) {
        resolve(true)
        return
      }
      const start = Date.now()
      const interval = setInterval(() => {
        if (node.children.length > 0) {
          clearInterval(interval)
          resolve(true)
        } else if (Date.now() - start > timeoutMs) {
          clearInterval(interval)
          resolve(false)
        }
      }, 100)
    })
  }

  async function mountBook(key: BookKey): Promise<void> {
    const ui = uiRef.current
    const node = nodeRefs.current[key]
    const book = books.find((b) => b.key === key)
    if (!ui || !node || !book || mountedRef.current[key]) return

    mountedRef.current[key] = true

    try {
      // createComponent may return a component OR a promise depending on
      // SDK version -- Promise.resolve() safely normalises both.
      await Promise.resolve(
        ui.createComponent('product', {
          id: book.id,
          node,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: buyButtonOptions,
        })
      )
    } catch {
      // Ignore -- we verify success by watching the DOM below instead.
    }

    const rendered = await waitForRender(node)
    if (rendered) {
      setMounted((prev) => ({ ...prev, [key]: true }))
    } else {
      // Let the user retry this one
      mountedRef.current[key] = false
    }
  }

  return (
    <section id={anchorId} className="max-w-5xl mx-auto px-6 pb-20 scroll-mt-24">
      <div className="mb-10 text-center sm:text-left">
        <p className="text-rose text-xs font-medium tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl font-semibold text-text">
          {heading}
        </h2>
        <p className="text-text-muted mt-2">{description}</p>
        {showBookstoreLink && (
          <p className="text-text-muted mt-1">
            Or you can click here to view the full{' '}
            <Link to="/bookstore" className="text-rose hover:text-rose-light underline transition-colors duration-200">
              bookstore
            </Link>
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-10 justify-center sm:justify-start">
        {books.map((book) => (
          <div key={book.key} className="w-full max-w-xs">
            {!mounted[book.key] && (
              <p className="text-text-faint text-sm mb-2 text-center lg:text-left">
                Loading {book.label}...{' '}
                <button
                  onClick={() => mountBook(book.key)}
                  className="underline hover:text-text transition-colors"
                >
                  Retry
                </button>
              </p>
            )}
            <div
              ref={(el) => {
                nodeRefs.current[book.key] = el
              }}
            />
            {'ebookLink' in book && book.ebookLink && (
              <a
                href={book.ebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 px-[63px] py-[15px] rounded-none text-sm font-semibold bg-surface-raised border border-border text-text hover:border-border-light hover:bg-ink-light transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current" aria-hidden="true">
                  <path d="M4 3.5a1 1 0 0 1 1.5-.87l14 8.5a1 1 0 0 1 0 1.74l-14 8.5A1 1 0 0 1 4 20.5v-17z" />
                </svg>
                Buy the eBook!
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
