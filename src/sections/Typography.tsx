export function Typography() {
  return (
    <section className="section">
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-size-2xl)" }}>
        Typography
      </h2>

      {["--font-heading", "--font-body", "--font-mono"].map((fontVar) => (
        <div key={fontVar} style={{ marginBottom: "var(--space-8)" }}>
          <h3 style={{ fontFamily: `var(${fontVar})`, fontSize: "var(--font-size-lg)" }}>
            {fontVar}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {["--font-size-xs", "--font-size-sm", "--font-size-base", "--font-size-lg", "--font-size-xl", "--font-size-2xl"].map(
              (sizeVar) => (
                <div key={sizeVar}>
                  <code style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>
                    {sizeVar}
                  </code>
                  <p
                    style={{
                      fontFamily: `var(${fontVar})`,
                      fontSize: `var(${sizeVar})`,
                      lineHeight: "var(--line-height-normal)",
                      margin: "var(--space-2) 0 0 0",
                    }}
                  >
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      ))}

      <div style={{ marginTop: "var(--space-8)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--color-border)" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-size-lg)", marginBottom: "var(--space-4)" }}>
          Mixed Example
        </h3>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--font-size-base)",
            lineHeight: "var(--line-height-normal)",
            color: "var(--color-text)",
          }}
        >
          <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-size-xl)", margin: "0 0 var(--space-3) 0" }}>
            Journal Entry
          </h4>
          <p style={{ margin: "0 0 var(--space-4) 0" }}>
            Today was a day of discovery and reflection. The morning light filtered through the window, casting long shadows
            across the room.
          </p>
          <p style={{ margin: "0", fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
            <label style={{ fontFamily: "var(--font-mono)", fontSize: "var(--font-size-xs)" }}>May 17, 2026 at 10:30 AM</label>
          </p>
        </div>
      </div>
    </section>
  );
}
