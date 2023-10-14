import { EventProvider } from "@/contexts/EventContext";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </EventProvider>
  );
}
