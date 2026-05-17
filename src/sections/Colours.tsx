export function Colours() {
  const colourGroups = {
    background: ["--color-bg", "--color-bg-surface"],
    border: ["--color-border"],
    text: ["--color-text", "--color-text-secondary", "--color-text-muted"],
    accent: ["--color-accent", "--color-accent-dark", "--color-accent-text"],
    secondary: ["--color-amber", "--color-rust"],
  };

  return (
    <section className="section">
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-size-2xl)" }}>
        Colours
      </h2>

      {Object.entries(colourGroups).map(([category, tokens]) => (
        <div key={category} style={{ marginBottom: "var(--space-8)" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-lg)",
              textTransform: "capitalize",
              marginBottom: "var(--space-4)",
            }}
          >
            {category}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {tokens.map((token) => (
              <div key={token}>
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: `var(${token})`,
                    borderRadius: "var(--panel-radius)",
                    border: "var(--panel-border-width) solid var(--color-border)",
                    marginBottom: "var(--space-3)",
                  }}
                />
                <code
                  style={{
                    display: "block",
                    fontSize: "var(--font-size-xs)",
                    color: "var(--color-text-secondary)",
                    wordBreak: "break-all",
                  }}
                >
                  {token}
                </code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
