export function Panels() {
  const panelWidths = [
    { label: "Narrow", width: "280px" },
    { label: "Wide", width: "600px" },
    { label: "Floating", width: "400px" },
  ];

  return (
    <section className="section">
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)" }}>
        Panels
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "var(--space-8)",
        }}
      >
        {panelWidths.map(({ label, width }) => (
        // Area around panel (groups text under frame)
        <div key={label} style={{
            width: "100%",
            height: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
          {/* Frame around panel */ }
          <div key={label} style={{
            width: "100%",
            height: "100%",
            border: "solid 1px var(--color-border)",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* The actual panel */}
            <div
              style={{
                width,
                backgroundColor: "var(--color-bg-surface)",
                borderRadius: "var(--panel-radius)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--panel-shadow)",
                padding: "var(--space-6)",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--font-size-lg)",
                  margin: "0 0 var(--space-4) 0",
                  color: "var(--color-text)",
                }}
              >
                {label} Panel
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-base)",
                  lineHeight: "var(--line-height-normal)",
                  color: "var(--color-text-secondary)",
                  margin: "0",
                }}
              >
                This is placeholder content inside a {label.toLowerCase()} panel. It demonstrates the panel styling with appropriate
                spacing and typography.
              </p>
            </div>
          </div>
          <code
            style={{
              display: "block",
              width,
              fontSize: "var(--font-size-xs)",
              color: "var(--color-text-muted)",
              marginTop: "var(--space-3)",
              textAlign: "center",
            }}
          >
            {width}
          </code>
        </div>
        ))}
      </div>
    </section>
  );
}
