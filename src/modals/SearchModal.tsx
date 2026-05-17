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

export function SearchModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--color-overlay)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "var(--color-bg-surface)",
          borderRadius: "var(--panel-radius)",
          boxShadow: "var(--panel-shadow)",
          border: "var(--panel-border-width) solid var(--color-border)",
          width: "90%",
          maxWidth: "500px",
          maxHeight: "80vh",
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
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
              color: "var(--color-text-primary)",
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

        <div style={{ padding: "var(--space-4)" }}>
          <input
            type="text"
            placeholder="Search entries..."
            autoFocus
            style={{
              width: "100%",
              padding: "var(--space-3)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-md)",
              backgroundColor: "var(--color-bg-primary)",
              border: "var(--panel-border-width) solid var(--color-border-strong)",
              borderRadius: "var(--panel-radius)",
              color: "var(--color-text-primary)",
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
                style={{
                  padding: "var(--space-3)",
                  backgroundColor: "var(--color-bg-primary)",
                  borderRadius: "var(--panel-radius)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-md)",
                  color: "var(--color-text-primary)",
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
                style={{
                  padding: "var(--space-3)",
                  backgroundColor: "var(--color-bg-secondary)",
                  borderRadius: "var(--panel-radius)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-accent-primary)",
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
