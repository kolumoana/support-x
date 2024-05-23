import { MantineProvider } from "@mantine/core";
import type { Metadata, Viewport } from "next";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "support 𝕏",
  description: "support 𝕏",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" style={{ backgroundColor: "white" }}>
      <body>
        <MantineProvider>
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
