import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"
export const alt = "KV Launch - Free Websites for Young Entrepreneurs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"))
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`

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
          background: "linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 50%, #fff0f8 100%)",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(168, 85, 247, 0.08)",
          }}
        />

        {/* Logo */}
        <img
          src={logoBase64}
          alt="KV Launch"
          style={{
            height: 200,
            objectFit: "contain",
            marginBottom: 40,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontSize: 32,
            color: "#555",
            textAlign: "center",
            margin: 0,
            fontFamily: "sans-serif",
          }}
        >
          Free websites for entrepreneurs aged 19 and under
        </p>

        {/* Location */}
        <p
          style={{
            fontSize: 22,
            color: "#888",
            textAlign: "center",
            margin: 0,
            marginTop: 12,
            fontFamily: "sans-serif",
          }}
        >
          Quispamsis & Rothesay, New Brunswick
        </p>
      </div>
    ),
    { ...size }
  )
}
