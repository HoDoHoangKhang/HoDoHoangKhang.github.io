import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import type { WebSite, WithContext } from "schema-dts"

import { ConsentManagerClient } from "@/components/consent-manager-client"
import { DuckFollower } from "@/components/duck-follower"
import { Providers } from "@/components/providers"
import { META_THEME_COLORS, SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { fontMono, fontPixelSquare, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ConsentManager } from "@/registry/components/consent-manager"

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  }
}

// Thanks @shadcn-ui, @tailwindcss. Default: light; dark only when user explicitly chose dark.
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark') {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`

const GA_MEASUREMENT_ID = "G-NGN7TNG0CC"

const SHARE_TITLE = "Hoàng Khang – Web Developer Portfolio"
const SHARE_DESCRIPTION =
  "Explore Hoàng Khang's featured projects, skills, and experience in web development."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: SHARE_TITLE,
  },
  description: SHARE_DESCRIPTION,
  keywords: SITE_INFO.keywords,
  authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
  creator: SITE_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SHARE_DESCRIPTION,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [{ url: "/logo-k.png", type: "image/png", sizes: "any" }],
    apple: { url: "/logo-k.png", type: "image/png", sizes: "180x180" },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        fontMono.variable,
        fontPixelSquare.variable
      )}
      suppressHydrationWarning
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <Providers>
          <NuqsAdapter>
            <ConsentManager>
              <ConsentManagerClient>{children}</ConsentManagerClient>
              <DuckFollower />
            </ConsentManager>
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
