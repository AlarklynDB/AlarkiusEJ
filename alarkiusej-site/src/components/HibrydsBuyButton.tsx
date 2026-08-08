import { useEffect, useRef, useState } from 'react'

// Shared Shopify Storefront client config
const SHOPIFY_DOMAIN = '3ed71a-4.myshopify.com'
const SHOPIFY_TOKEN = '5735230c53c0a7ac626a2f9ccdc10815'
const SCRIPT_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

// Shared Buy Button UI options (Shopify default theme — Crimson Text / orange)
const buyButtonOptions = {
  product: {
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': 'calc(25% - 20px)',
          'margin-left': '20px',
          'margin-bottom': '50px',
        },
      },
      title: {
        'font-family': 'Crimson Text, serif',
        'font-weight': 'normal',
        'font-size': '15px',
      },
      button: {
        'font-family': 'Crimson Text, serif',
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        ':hover': {
          'background-color': '#e65f00',
        },
        'background-color': '#ff6a00',
        ':focus': {
          'background-color': '#e65f00',
        },
        'border-radius': '40px',
        'padding-left': '21px',
        'padding-right': '21px',
      },
      quantityInput: {
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
      },
      price: {
        'font-family': 'Crimson Text, serif',
        'font-size': '16px',
      },
      compareAt: {
        'font-family': 'Crimson Text, serif',
        'font-size': '13.6px',
      },
      unitPrice: {
        'font-family': 'Crimson Text, serif',
        'font-size': '13.6px',
      },
    },
    contents: {
      button: false,
      buttonWithQuantity: true,
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
          'margin-left': '-20px',
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
        'font-family': 'Crimson Text, serif',
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        ':hover': {
          'background-color': '#e65f00',
        },
        'background-color': '#ff6a00',
        ':focus': {
          'background-color': '#e65f00',
        },
        'border-radius': '40px',
        'padding-left': '21px',
        'padding-right': '21px',
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
        color: '#4c4c4c',
      },
      price: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '18px',
        color: '#4c4c4c',
      },
      compareAt: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '15.3px',
        color: '#4c4c4c',
      },
      unitPrice: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '15.3px',
        color: '#4c4c4c',
      },
    },
    googleFonts: ['Crimson Text'],
    text: {
      button: 'Add to cart',
    },
  },
  option: {},
  cart: {
    styles: {
      button: {
        'font-family': 'Crimson Text, serif',
        'font-size': '14px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        ':hover': {
          'background-color': '#e65f00',
        },
        'background-color': '#ff6a00',
        ':focus': {
          'background-color': '#e65f00',
        },
        'border-radius': '40px',
      },
    },
    text: {
      total: 'Subtotal',
      button: 'Checkout',
    },
    googleFonts: ['Crimson Text'],
  },
  toggle: {
    styles: {
      toggle: {
        'font-family': 'Crimson Text, serif',
        'background-color': '#ff6a00',
        ':hover': {
          'background-color': '#e65f00',
        },
        ':focus': {
          'background-color': '#e65f00',
        },
      },
      count: {
        'font-size': '14px',
      },
    },
    googleFonts: ['Crimson Text'],
  },
}

// Hibryds I product IDs (Shopify)
const PRODUCTS = {
  soft: { id: '9492713472246', label: 'Softcover' },
  hard: { id: '9492713767158', label: 'Hardcover' },
} as const

type Format = keyof typeof PRODUCTS
const FORMAT_KEYS = Object.keys(PRODUCTS) as Format[]

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

export default function HibrydsBuyButton() {
  const [format, setFormat] = useState<Format>('soft')
  const [mounted, setMounted] = useState<Record<string, boolean>>({})
  // Each format gets its own permanent, never-wiped mount node — created once on load.
  const nodeRefs = useRef<Record<Format, HTMLDivElement | null>>({
    soft: null,
    hard: null,
  })
  const uiRef = useRef<any>(null)
  const mountedRef = useRef<Record<string, boolean>>({})

  useEffect(() => {
    let cancelled = false

    getShopifyClient().then((client) => {
      if (cancelled) return
      ;(window as any).ShopifyBuy.UI.onReady(client).then(async (ui: any) => {
        if (cancelled) return
        uiRef.current = ui
        // Shopify's Buy Button SDK does not reliably handle two overlapping
        // createComponent() calls on the same ui instance -- the second one
        // can silently stall forever. Mount the selected format first, WAIT
        // for it to fully resolve, then mount the other one after.
        await mountFormatOnce(format)
        if (cancelled) return
        const rest = FORMAT_KEYS.filter((k) => k !== format)
        for (const k of rest) {
          await mountFormatOnce(k)
          if (cancelled) return
        }
      })
    })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function mountFormatOnce(fmt: Format): Promise<void> {
    const ui = uiRef.current
    const node = nodeRefs.current[fmt]
    if (!ui || !node || mountedRef.current[fmt]) return Promise.resolve()

    mountedRef.current[fmt] = true

    return ui
      .createComponent('product', {
        id: PRODUCTS[fmt].id,
        node,
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: buyButtonOptions,
      })
      .then(() => {
        setMounted((prev) => ({ ...prev, [fmt]: true }))
      })
      .catch(() => {
        // Allow retry on failure instead of getting stuck "mounted" forever
        mountedRef.current[fmt] = false
      })
  }

  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <div className="mb-8">
        <p className="text-rose text-xs font-medium tracking-widest uppercase mb-2">Get the Book</p>
        <h2 className="font-serif text-3xl font-semibold text-text">Hibryds I</h2>
        <p className="text-text-muted mt-2">Pick your format — Softcover or Hardcover.</p>
      </div>

      <div className="inline-flex rounded-full border border-border bg-surface p-1 mb-6">
        {FORMAT_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => {
              setFormat(key)
              // If this format never finished mounting, give it another shot.
              if (!mountedRef.current[key]) {
                mountFormatOnce(key)
              }
            }}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              format === key ? 'bg-rose text-ink' : 'text-text-muted hover:text-text'
            }`}
          >
            {PRODUCTS[key].label}
          </button>
        ))}
      </div>

      {!mounted[format] && (
        <p className="text-text-faint text-sm">
          Loading...{' '}
          <button
            onClick={() => mountFormatOnce(format)}
            className="underline hover:text-text transition-colors"
          >
            Taking a while? Click to retry.
          </button>
        </p>
      )}

      {FORMAT_KEYS.map((key) => (
        <div
          key={key}
          ref={(el) => {
            nodeRefs.current[key] = el
          }}
          style={{ display: format === key ? 'block' : 'none' }}
        />
      ))}
    </section>
  )
}
