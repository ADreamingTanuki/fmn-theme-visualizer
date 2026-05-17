import { useState } from "react";

export function Patterns() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <section className="section">
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)" }}>
        Patterns
      </h2>

      {/* Sidebar */}
      <div style={{ marginBottom: "var(--space-8)", display: "flex", gap: "var(--space-4)" }}>
        <aside
          style={{
            width: "200px",
            backgroundColor: "var(--color-bg)",
            borderRadius: "var(--panel-radius)",
            padding: "var(--space-4)",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              margin: "0 0 var(--space-3) 0",
              letterSpacing: "0.05em",
            }}
          >
            Categories
          </h4>
          {["Reflections", "Gratitude", "Dreams", "Goals"].map((item) => (
            <div
              key={item}
              style={{
                padding: "var(--space-2) var(--space-3)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text)",
                cursor: "pointer",
                borderRadius: "var(--panel-radius)",
              }}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Main content area */}
        <div style={{ flex: 1 }}>
          {/* Journal Entry Card */}
          <div
            style={{
              backgroundColor: "var(--color-bg-surface)",
              borderRadius: "var(--panel-radius)",
              border: "var(--panel-border-width) solid var(--color-border)",
              boxShadow: "var(--panel-shadow)",
              padding: "var(--space-6)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--font-size-lg)",
                margin: "0 0 var(--space-2) 0",
                color: "var(--color-text)",
              }}
            >
              A Day of Reflection
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-muted)",
                margin: "0 0 var(--space-4) 0",
              }}
            >
              May 17, 2026
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-base)",
                lineHeight: "var(--line-height-normal)",
                color: "var(--color-text)",
                margin: "0",
              }}
            >
              Today presented unexpected opportunities for growth. The conversations I had and the moments of stillness reminded me of what truly matters.
            </p>
          </div>

          {/* Text Input */}
          <div style={{ marginBottom: "var(--space-6)" }}>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text)",
                marginBottom: "var(--space-2)",
                fontWeight: "500",
              }}
            >
              Write something
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              style={{
                width: "100%",
                padding: "var(--space-3)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-base)",
                backgroundColor: "var(--color-bg-surface)",
                border: "var(--panel-border-width) solid var(--color-border)",
                borderRadius: "var(--panel-radius)",
                color: "var(--color-text)",
              }}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                padding: "var(--space-3) var(--space-6)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-base)",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-accent-text)",
                border: "none",
                borderRadius: "var(--panel-radius)",
                cursor: "pointer",
              }}
            >
              Open Search
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              style={{
                padding: "var(--space-3) var(--space-6)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-base)",
                backgroundColor: "transparent",
                color: "var(--color-accent)",
                border: "var(--panel-border-width) solid var(--color-accent)",
                borderRadius: "var(--panel-radius)",
                cursor: "pointer",
              }}
            >
              Open Settings
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            style={{
              backgroundColor: "var(--color-bg-surface)",
              borderRadius: "var(--panel-radius)",
              boxShadow: "var(--panel-shadow)",
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
                  color: "var(--color-text)",
                }}
              >
                Search
              </h2>
              <button
                onClick={() => setSearchOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "var(--font-size-lg)",
                  cursor: "pointer",
                  color: "var(--color-text-secondary)",
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
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "var(--color-bg)",
                  border: "var(--panel-border-width) solid var(--color-border)",
                  borderRadius: "var(--panel-radius)",
                  color: "var(--color-text)",
                  marginBottom: "var(--space-4)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {["Search Result 1", "Search Result 2", "Command: Export", "Command: Delete"].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "var(--space-3)",
                      backgroundColor: "var(--color-bg)",
                      borderRadius: "var(--panel-radius)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--font-size-base)",
                      color: "var(--color-text-secondary)",
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
      )}

      {/* Settings Modal */}
      {settingsOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSettingsOpen(false)}
        >
          <div
            style={{
              backgroundColor: "var(--color-bg-surface)",
              borderRadius: "var(--panel-radius)",
              boxShadow: "var(--panel-shadow)",
              width: "90%",
              maxWidth: "700px",
              maxHeight: "80vh",
              overflow: "auto",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav */}
            <nav
              style={{
                backgroundColor: "var(--color-bg)",
                borderRight: "var(--panel-border-width) solid var(--color-border)",
                padding: "var(--space-4)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
              }}
            >
              {["General", "Appearance", "Privacy", "About"].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "var(--space-3)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-text-secondary)",
                    cursor: "pointer",
                    borderRadius: "var(--panel-radius)",
                  }}
                >
                  {item}
                </div>
              ))}
            </nav>

            {/* Right Panel */}
            <div style={{ padding: "var(--space-6)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--font-size-lg)",
                    margin: 0,
                    color: "var(--color-text)",
                  }}
                >
                  Settings
                </h2>
                <button
                  onClick={() => setSettingsOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "var(--font-size-lg)",
                    cursor: "pointer",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Settings Options */}
              {["Enable notifications", "Auto-save drafts", "Dark mode by default"].map((option) => (
                <div key={option} style={{ marginBottom: "var(--space-4)", paddingBottom: "var(--space-4)", borderBottom: "var(--panel-border-width) solid var(--color-border)" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--font-size-base)",
                      color: "var(--color-text)",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ width: "20px", height: "20px", cursor: "pointer" }}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
