import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const contentResults = [
  "May 17 — A Day of Reflection",
  "May 10 — Gratitude and Growth",
  "May 3 — A Quiet Morning",
];

const commandResults = ["→ Export entries", "→ Delete entry"];

const MIN_WIDTH = "500px";
const MAX_WIDTH = "680px";
const TARGET_WIDTH = "80vw";
const TARGET_HEIGHT = "80vh";

export function SearchModal({ open, onClose }: Props) {
  const [hoveredEntry, setHoveredEntry] = useState<string | null>(null);
  const [hoveredCommand, setHoveredCommand] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--color-overlay)",
        backdropFilter: `blur(var(--modal-backdrop-blur))`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      {/* modal panel */}
      <div
        style={{
          backgroundColor: "var(--color-bg-surface)",
          borderRadius: "var(--panel-radius)",
          boxShadow: "var(--panel-shadow)",
          border: "var(--panel-border-width) solid var(--color-border)",
          width:  `clamp(${MIN_WIDTH}, ${TARGET_WIDTH}, ${MAX_WIDTH})`,
          height: `${TARGET_HEIGHT}`,
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div
          style={{
            padding: "var(--space-4)",
            borderBottom: "var(--panel-border-width) solid var(--color-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-lg)",
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            Search
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "var(--font-size-lg)",
              cursor: "pointer",
              color: "var(--color-text-secondary)",
              padding: "var(--space-1)",
            }}
          >
            ✕
          </button>
        </div>

        {/* body */}
        <div style={{ padding: "var(--space-4)" }}>
          <input
            type="text"
            placeholder="Search entries..."
            autoFocus
            style={{
              width: "100%",
              padding: "var(--space-3)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-base)",
              backgroundColor: "var(--color-bg)",
              border: "var(--panel-border-width) solid var(--color-border)",
              borderRadius: "var(--panel-radius)",
              color: "var(--color-text)",
              marginBottom: "var(--space-4)",
              boxSizing: "border-box",
              outline: "none",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--font-size-xs)",
              color: "var(--color-text-secondary)",
              margin: "0 0 var(--space-2) 0",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Entries
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", marginBottom: "var(--space-4)" }}>
            {contentResults.map((item) => (
              <div
                key={item}
                onMouseEnter={() => setHoveredEntry(item)}
                onMouseLeave={() => setHoveredEntry(null)}
                style={{
                  padding: "var(--space-3)",
                  backgroundColor: hoveredEntry === item ? "var(--color-bg-hover)" : "var(--color-bg)",
                  transition: "var(--transition-hover)",
                  borderRadius: "var(--panel-radius)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-base)",
                  color: "var(--color-text)",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--font-size-xs)",
              color: "var(--color-text-secondary)",
              margin: "0 0 var(--space-2) 0",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Commands
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {commandResults.map((item) => (
              <div
                key={item}
                onMouseEnter={() => setHoveredCommand(item)}
                onMouseLeave={() => setHoveredCommand(null)}
                style={{
                  padding: "var(--space-3)",
                  backgroundColor: hoveredCommand === item ? "var(--color-bg-hover)" : "var(--color-bg-surface)",
                  transition: "var(--transition-hover)",
                  borderRadius: "var(--panel-radius)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-accent)",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
