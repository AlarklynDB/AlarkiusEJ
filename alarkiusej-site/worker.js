// ============================================================
// alaria-aurelia — Author Schema Worker
// Domain: alarkiusej.com
// Injects structured data (JSON-LD) + favicon into HTML responses
// ============================================================

const AUTHOR_ID       = "https://www.alarkiusej.com/#author";
const AUTHOR_SITE_ID  = "https://www.alarkiusej.com/#website";
const AUTHOR_BRAND_ID = "https://www.alarkiusej.com/#brand";

const HIBRYTHIAN_SITE_ID   = "https://www.thehibrythiansaga.com/#website";
const HIBRYTHIAN_SERIES_ID = "https://www.thehibrythiansaga.com/#series";

const NAISEIKAI_SITE_ID   = "https://www.naiseikaiuniverse.com/#website";
const NAISEIKAI_SERIES_ID = "https://www.naiseikaiuniverse.com/#series";

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
    "https://modrinth.com/user/AlariaEJ",
    "https://www.barnesandnoble.com/s/alarkius-elvya-jay",
    "https://www.thehibrythiansaga.com/",
    "https://www.naiseikaiuniverse.com/"
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

function getSchemaByHostname(hostname) {
  if (hostname === "www.alarkiusej.com" || hostname === "alarkiusej.com") return AUTHOR_SCHEMA;
  if (hostname === "www.thehibrythiansaga.com" || hostname === "thehibrythiansaga.com") return HIBRYTHIAN_SCHEMA;
  if (hostname === "www.naiseikaiuniverse.com" || hostname === "naiseikaiuniverse.com") return NAISEIKAI_SCHEMA;
  return null;
}

function getFaviconByHostname(hostname) {
  if (hostname === "www.alarkiusej.com" || hostname === "alarkiusej.com")
    return "https://i.ibb.co/ZRfBMVj1/alarkiusej-favicon.png";
  if (hostname === "www.naiseikaiuniverse.com" || hostname === "naiseikaiuniverse.com")
    return "https://i.ibb.co/XZWTy55s/Naiseikai-Universe-Mascot-Haruhi-3.png";
  if (hostname === "www.thehibrythiansaga.com" || hostname === "thehibrythiansaga.com")
    return "https://i.ibb.co/TMyBRP17/HAXL-Hibryds-Adventure-Xinematic-Library-Logo-V3.png";
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

// ------------------------------------------------------------
// HTMLRewriter handlers
// ------------------------------------------------------------

class HeadHandler {
  constructor(schema, faviconUrl) {
    this.schema = schema;
    this.faviconUrl = faviconUrl;
  }

  element(element) {
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

// ------------------------------------------------------------
// Fetch handler
// ------------------------------------------------------------

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    let response = await fetch(request, { redirect: "follow" });

    // SPA fallback: if 404 and path has no file extension, serve index.html
    // This allows React Router to handle client-side routing on hard refresh
    if (response.status === 404 && !url.pathname.includes('.')) {
      const indexUrl = new URL('/', url);
      response = await fetch(indexUrl.toString());
    }

    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("text/html")) return response;

    const schema  = getSchemaByHostname(hostname);
    const favicon = getFaviconByHostname(hostname);

    const transformed = new HTMLRewriter()
      .on("head", new HeadHandler(schema, favicon))
      .transform(response);

    const newHeaders = new Headers(transformed.headers);
    newHeaders.set("content-type", "text/html; charset=UTF-8");

    return new Response(transformed.body, {
      status: transformed.status,
      statusText: transformed.statusText,
      headers: newHeaders
    });
  }
};
