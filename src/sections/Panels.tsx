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
          <div key={label}>
            <div
              style={{
                width,
                backgroundColor: "var(--color-bg-surface)",
                borderRadius: "var(--panel-radius)",
                border: "var(--panel-border-width) solid var(--color-border)",
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
            <code
              style={{
                display: "block",
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
