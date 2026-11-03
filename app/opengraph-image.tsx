import { ImageResponse } from "next/og";

export const alt = "Atlanta Cleaners Nigeria Ltd, professional cleaning services in Abuja";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview shown when the site is shared on WhatsApp, Facebook, etc.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          padding: 60,
        }}
      >
        <svg viewBox="0 0 100 90" width="220" height="198">
          <polygon points="50,2 4,86 50,60" fill="#d62828" />
          <polygon points="50,2 50,60 96,86" fill="#2e9e4f" />
          <polygon points="4,86 50,60 96,86" fill="#1d3f9a" />
        </svg>
        <div style={{ marginTop: 40, fontSize: 72, fontWeight: 800, color: "#1e3a8a", textAlign: "center" }}>
          ATLANTA CLEANERS NIGERIA LTD
        </div>
        <div style={{ marginTop: 20, fontSize: 36, color: "#475569", textAlign: "center" }}>
          Home, Office, Airbnb & Post-Construction Cleaning in Abuja
        </div>
      </div>
    ),
    size
  );
}
