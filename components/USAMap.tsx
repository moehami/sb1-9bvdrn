"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USAMap() {
  const router = useRouter();
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Find Storage by State</h2>
          <p className="text-muted-foreground text-lg">
            Click on any state to explore available storage units
          </p>
        </motion.div>

        <div className="relative">
          <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(geo.properties.name);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => {
                      router.push(
                        `/places/${geo.properties.name.toLowerCase().replace(/\s+/g, "-")}`
                      );
                    }}
                    style={{
                      default: {
                        fill: "hsl(var(--muted))",
                        stroke: "hsl(var(--border))",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "hsl(var(--primary))",
                        stroke: "hsl(var(--border))",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: "pointer",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>

          {tooltipContent && (
            <div
              className="absolute bg-popover text-popover-foreground px-4 py-2 rounded-md shadow-lg"
              style={{
                left: "50%",
                bottom: "10%",
                transform: "translateX(-50%)",
              }}
            >
              {tooltipContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}