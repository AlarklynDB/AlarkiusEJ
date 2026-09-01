// ============================================================
// Author Schema Worker for AlarkiusEJ and his sub sites
// Domain: alarkiusej.com , thehibrythiansaga.com , naiseikaiuniverse.com
// Injects structured data (JSON-LD) + favicon into HTML responses
// ============================================================

const AUTHOR_ID       = "https://www.alarkiusej.com/#author";
const AUTHOR_SITE_ID  = "https://www.alarkiusej.com/#website";
const AUTHOR_BRAND_ID = "https://www.alarkiusej.com/#brand";

const HIBRYTHIAN_SITE_ID   = "https://www.thehibrythiansaga.com/#website";
const HIBRYTHIAN_SERIES_ID = "https://www.thehibrythiansaga.com/#series";

const NAISEIKAI_SITE_ID   = "https://www.naiseikaiuniverse.com/#website";
const NAISEIKAI_SERIES_ID = "https://www.naiseikaiuniverse.com/#series";

// ═══════════════════════════════════════════════════════════
// FOUD — per-site background color (the actual site bg)
// ═══════════════════════════════════════════════════════════
const BG_COLOR = "#191919";

// ------------------------------------------------------------
// Shared Nodes
// ------------------------------------------------------------

const PERSON_NODE = {
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "Alarkius Elvya Jay",
  alternateName: ["Alarkius Elvya Jay", "AlarkiusEJ", "AJ", "KarasuEJ"],
  url: "https://www.alarkiusej.com/",
  jobTitle: ["Author", "Composer", "Worldbuilder", "Artist"],
  description:
    "Alarkius Elvya Jay, also known as AlarkiusEJ, is the author of The Hibrythian Saga and creator of the Naiseikai Universe.",
  sameAs: [
          "https://www.youtube.com/@AlarkiusEJ",
          "https://www.youtube.com/@AlarkiusJay",
          "https://www.youtube.com/@TheHibrythianSaga",
          "https://www.reddit.com/user/OfficialAlarkiusJay",
          "https://www.reddit.com/r/ShizukanaKarasuNinja/",
          "https://www.reddit.com/r/HibrydsCUniverse/",
          "https://www.linkedin.com/in/alarkiusej/",
          "https://github.com/AlarkiusJay",
          "https://github.com/TheAlarklynZone",
          "https://github.com/AlarklynDB",    
          "https://www.thehibrythiansaga.com/",
          "https://www.naiseikaiuniverse.com/",
          "https://www.barnesandnoble.com/search?q=Alarkius%20Elvya%20Jay&contributorName=alarkius-elvya-jay",
          "https://www.barnesandnoble.com/search?attributes.mfield_bnb__seriesTitle=The%20Hibrythian%20Saga",
          "https://www.barnesandnoble.com/search?attributes.mfield_bnb__seriesTitle=The%20Naiseikai%20Universe",
          "https://www.wikidata.org/wiki/Q140438474",
          "https://www.wikidata.org/wiki/Q140438511",
          "https://www.wikidata.org/wiki/Q140438394"
  ]
};

const BRAND_NODE = {
  "@type": "Organization",
  "@id": AUTHOR_BRAND_ID,
  name: "AlarkiusEJ",
  url: "https://www.alarkiusej.com/",
  founder: { "@id": AUTHOR_ID }
};

// ------------------------------------------------------------
// Schemas
// ------------------------------------------------------------

const AUTHOR_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON_NODE,
    BRAND_NODE,
    {
      "@type": "WebSite",
      "@id": AUTHOR_SITE_ID,
      url: "https://www.alarkiusej.com/",
      name: "AlarkiusEJ",
      description:
        "Official Author Website of Alarkius Elvya Jay, featuring books, worlds, music, art, and creative projects.",
      about:     { "@id": AUTHOR_ID },
      creator:   { "@id": AUTHOR_ID },
      publisher: { "@id": AUTHOR_BRAND_ID }
    }
  ]
};

const HIBRYTHIAN_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON_NODE,
    BRAND_NODE,
    {
      "@type": "BookSeries",
      "@id": HIBRYTHIAN_SERIES_ID,
      name: "The Hibrythian Saga",
      url: "https://www.thehibrythiansaga.com/",
      description: "An Adventure Fantasy Book Series created by Alarkius Elvya Jay.",
      author:    { "@id": AUTHOR_ID },
      creator:   { "@id": AUTHOR_ID },
      publisher: { "@id": AUTHOR_BRAND_ID }
    },
    {
      "@type": "WebSite",
      "@id": HIBRYTHIAN_SITE_ID,
      url: "https://www.thehibrythiansaga.com/",
      name: "The Hibrythian Saga",
      description: "The Official Website for The Hibrythian Saga by Alarkius Elvya Jay.",
      about:     { "@id": HIBRYTHIAN_SERIES_ID },
      creator:   { "@id": AUTHOR_ID },
      publisher: { "@id": AUTHOR_BRAND_ID }
    }
  ]
};

const NAISEIKAI_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON_NODE,
    BRAND_NODE,
    {
      "@type": "CreativeWorkSeries",
      "@id": NAISEIKAI_SERIES_ID,
      name: "The Naiseikai Universe",
      url: "https://www.naiseikaiuniverse.com/",
      description:
        "A Light Novel Universe and Connected Creative World created by Alarkius Elvya Jay.",
      creator:   { "@id": AUTHOR_ID },
      author:    { "@id": AUTHOR_ID },
      publisher: { "@id": AUTHOR_BRAND_ID }
    },
    {
      "@type": "WebSite",
      "@id": NAISEIKAI_SITE_ID,
      url: "https://www.naiseikaiuniverse.com/",
      name: "The Naiseikai Universe",
      description: "The Official Website for The Naiseikai Universe created by Alarkius Elvya Jay.",
      about:     { "@id": NAISEIKAI_SERIES_ID },
      creator:   { "@id": AUTHOR_ID },
      publisher: { "@id": AUTHOR_BRAND_ID }
    }
  ]
};

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

// "shop.alarkiusej.com" is a disguised alias for /bookstore — same Worker,
// same origin, just a different front door. Treat it as alarkiusej.com for
// schema/favicon purposes since it's the same brand.
const STORE_HOSTNAMES = new Set(["shop.alarkiusej.com", "www.shop.alarkiusej.com"]);

function getSchemaByHostname(hostname) {
  if (hostname === "www.alarkiusej.com" || hostname === "alarkiusej.com" || STORE_HOSTNAMES.has(hostname)) return AUTHOR_SCHEMA;
  if (hostname === "www.thehibrythiansaga.com" || hostname === "thehibrythiansaga.com") return HIBRYTHIAN_SCHEMA;
  if (hostname === "www.naiseikaiuniverse.com" || hostname === "naiseikaiuniverse.com") return NAISEIKAI_SCHEMA;
  return null;
}

function getFaviconByHostname(hostname) {
  if (hostname === "www.alarkiusej.com" || hostname === "alarkiusej.com" || STORE_HOSTNAMES.has(hostname))
    return "https://i.ibb.co/ZRfBMVj1/alarkiusej-favicon.png";
  if (hostname === "www.naiseikaiuniverse.com" || hostname === "naiseikaiuniverse.com")
    return "https://i.ibb.co/XZWTy55s/Naiseikai-Universe-Mascot-Haruhi-3.png";
  if (hostname === "www.thehibrythiansaga.com" || hostname === "thehibrythiansaga.com")
    return "https://i.ibb.co/zVLr0yRP/HAXL-Hibryds-Adventure-Xinematic-Library-Logo-V2.png";
  return null;
}

function escapeScriptJson(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

// ═══════════════════════════════════════════════════════════
// FOUD — Anti-Flash Shield: full-viewport cover that gets
// removed immediately by inline script. If rendering is
// delayed, the shield stays visible and the gray flash never
// reaches the user. Runs at the EDGE — covers ALL pages.
// ═══════════════════════════════════════════════════════════

const FOUD_HEAD_STYLE = `<style>:root{color-scheme:dark}html,body{background-color:${BG_COLOR}!important;margin:0}</style>`;
const FOUD_BODY_SHIELD = `<div id="foud-s" style="position:fixed;inset:0;z-index:2147483647;background:${BG_COLOR};"></div><script>(function(){var d=document.getElementById('foud-s');if(d)d.remove();})();</script>`;

class HeadHandler {
  constructor(schema, faviconUrl) {
    this.schema = schema;
    this.faviconUrl = faviconUrl;
  }

  element(element) {
    // FOUD Layer 1: dark canvas in <head> (browser paints dark)
    element.prepend(FOUD_HEAD_STYLE, { html: true });

    if (this.faviconUrl) {
      element.prepend(`
        <link rel="icon" type="image/png" sizes="192x192" href="${this.faviconUrl}">
        <link rel="icon" type="image/png" sizes="96x96" href="${this.faviconUrl}">
        <link rel="shortcut icon" href="${this.faviconUrl}">
        <link rel="apple-touch-icon" sizes="180x180" href="${this.faviconUrl}">
      `, { html: true });
    }

    if (this.schema) {
      element.append(
        `<script type="application/ld+json">${escapeScriptJson(this.schema)}</script>`,
        { html: true }
      );
    }
  }
}

// FOUD Layer 2: physical viewport cover in <body>
class BodyHandler {
  element(element) {
    element.prepend(FOUD_BODY_SHIELD, { html: true });
  }
}

// ------------------------------------------------------------
// Medium feed proxy — /api/medium-feed
//
// The About page used to hit api.rss2json.com client-side. That's a
// free, keyless third-party proxy with its own rate limits/uptime, and
// Medium's RSS feed can't be fetched directly from the browser (no
// CORS header). Since every request already passes through this Worker,
// fetching Medium's RSS server-to-server here sidesteps both problems —
// no CORS restriction applies to Worker-to-origin fetches, and the
// response is edge-cached for 30 minutes.
// ------------------------------------------------------------

const MEDIUM_FEED_URL = "https://medium.com/feed/@alarkiusej";

function decodeXmlEntities(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!match) return "";
  const cdata = match[1].match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return cdata ? cdata[1] : match[1].trim();
}

function parseMediumRss(xml) {
  const items = [];
  const blocks = xml.split("<item>").slice(1);
  for (const raw of blocks) {
    const block = raw.split("</item>")[0];
    const title = decodeXmlEntities(extractTag(block, "title"));
    const link = decodeXmlEntities(extractTag(block, "link"));
    const pubDate = extractTag(block, "pubDate");
    const content = extractTag(block, "content:encoded") || extractTag(block, "description");
    if (title && link) items.push({ title, link, pubDate, content });
  }
  return items;
}

async function handleMediumFeed() {
  try {
    const res = await fetch(MEDIUM_FEED_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AlarkiusEJSiteBot/1.0; +https://alarkiusej.com)" },
      cf: { cacheTtl: 1800, cacheEverything: true },
    });
    if (!res.ok) throw new Error(`Medium responded ${res.status}`);
    const xml = await res.text();
    const items = parseMediumRss(xml).slice(0, 20);
    if (!items.length) throw new Error("No items parsed from Medium feed");

    return new Response(JSON.stringify({ status: "ok", items }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "cache-control": "public, max-age=1800",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: String(err) }), {
      status: 502,
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
  }
}

// ------------------------------------------------------------
// Fetch handler
// ------------------------------------------------------------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    if (url.pathname === "/api/medium-feed" && request.method === "GET") {
      return handleMediumFeed();
    }

    // "shop.alarkiusej.com" is a disguised front door for /bookstore.
    // Rewrite the fetched asset path (not a redirect) so the URL bar keeps
    // showing shop.alarkiusej.com while the actual /bookstore page renders.
    let assetRequest = request;
    if (STORE_HOSTNAMES.has(hostname) && url.pathname === "/") {
      const rewritten = new URL(url.toString());
      rewritten.pathname = "/bookstore/";
      assetRequest = new Request(rewritten.toString(), request);
    }

    // Fetch the matching static asset from the Astro build.
    let response;
    try {
      response = await env.ASSETS.fetch(assetRequest);
    } catch (_) {
      response = await env.ASSETS.fetch(
        new Request(new URL("/404.html", url).toString(), request)
      );
    }

    // Dead path: if an HTML navigation resolves to a 404 (e.g. legacy Notion
    // links like /Pok-monNEXUS-...?pvs=21 left over from the pre-GitHub era),
    // send a permanent redirect to the homepage instead of serving a 200 shell.
    // 301 tells search engines the old URL is gone and de-indexes it.
    if (response.status === 404) {
      const accept = request.headers.get("accept") || "";
      const isHtmlNav = request.method === "GET" && accept.includes("text/html");
      if (isHtmlNav && url.pathname !== "/") {
        return Response.redirect(new URL("/", url).toString(), 301);
      }
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return response;

    const schema  = getSchemaByHostname(hostname);
    const favicon = getFaviconByHostname(hostname);

    // FOUD: both head (canvas) + body (shield) handlers
    const transformed = new HTMLRewriter()
      .on("head", new HeadHandler(schema, favicon))
      .on("body", new BodyHandler())
      .transform(response);

    const newHeaders = new Headers(transformed.headers);
    newHeaders.set("content-type", "text/html; charset=UTF-8");
    // Allow same-origin iframes (e.g. Vivaldi web panels) while blocking third-party embeds
    newHeaders.set("X-Frame-Options", "SAMEORIGIN");
    newHeaders.set("Content-Security-Policy", "frame-ancestors 'self'");

    return new Response(transformed.body, {
      status: transformed.status,
      statusText: transformed.statusText,
      headers: newHeaders
    });
  }
};
