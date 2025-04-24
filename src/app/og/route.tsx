import { ImageResponse } from "next/og";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export const runtime = "edge";

// Define size constants to avoid recalculation
const WIDTH = 1200; // Reduced from 1920
const HEIGHT = 630; // Reduced from 1080

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";
  
  // Use a system font instead of loading a custom font
  // This eliminates the need to fetch and process the font file
  const fontFamily = 'sans-serif';

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "3rem",
          background: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
            fontFamily,
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "4rem",
              lineHeight: "4rem",
              letterSpacing: "-0.05em",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <img
              src={`https://${baseURL}${person.avatar}`}
              style={{
                width: "6rem",
                height: "6rem",
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  lineHeight: "2.5rem",
                }}
              >
                {person.name}
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1.5rem",
                  opacity: "0.6",
                }}
              >
                {person.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      // No custom fonts - using system fonts instead
    },
  );
}
