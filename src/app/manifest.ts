import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BeUni",
    short_name: "BeUni",
    description: "BeUni",
    start_url: "/products",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF5F03",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
    ],
  };
}
