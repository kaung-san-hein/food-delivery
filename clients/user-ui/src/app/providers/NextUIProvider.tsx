"use client";

import { graphqlClient } from "@/src/graphql/gql.setup";
import { ApolloProvider } from "@apollo/client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ApolloProvider client={graphqlClient}>
      <HeroUIProvider>
        <NextThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemeProvider>
      </HeroUIProvider>
    </ApolloProvider>
  );
}
