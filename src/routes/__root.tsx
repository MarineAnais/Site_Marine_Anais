import { lazy, Suspense, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNavbar } from "../components/site/SiteNavbar";
import { SiteFooter } from "../components/site/SiteFooter";

const ErrorComponent = lazy(() => import("../components/site/RouteErrorComponent"));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison (92)" },
      { name: "description", content: "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations musicales live (solo & duo Solstice), cours de chant et voix off à Rueil-Malmaison, dans les Hauts-de-Seine et en Île-de-France." },
      { property: "og:title", content: "Marine Anaïs — Chanteuse & Coach Vocal à Rueil-Malmaison (92)" },
      { property: "og:description", content: "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations live, cours de chant et voix off dans les Hauts-de-Seine, à Paris et en Île-de-France." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" } as any,
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "Person"],
          name: "Marine Anaïs",
          jobTitle: "Chanteuse & Coach Vocal",
          url: "https://marineanais.fr",
          email: "marineanaiscontact@gmail.com",
          description:
            "Chanteuse et coach vocal basée à Rueil-Malmaison (92). Prestations musicales live (solo & duo Solstice), cours de chant, coaching vocal et voix off à Rueil-Malmaison, dans les Hauts-de-Seine et en Île-de-France.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rueil-Malmaison",
            postalCode: "92500",
            addressRegion: "Hauts-de-Seine",
            addressCountry: "FR",
          },
          areaServed: ["Rueil-Malmaison", "Hauts-de-Seine", "Île-de-France", "Paris"],
          sameAs: [
            "https://www.instagram.com/marinanais_",
            "https://vm.tiktok.com/ZNREASSyQ/",
            "https://www.youtube.com/@MarineAnaisBook",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg-primary)" }}>
        <SiteNavbar />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
