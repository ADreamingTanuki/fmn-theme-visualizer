interface Props {
  open: boolean;
  onClose: () => void;
}

const navSections = ["General", "Appearance", "Privacy", "About"];

export function SettingsModal({ open, onClose }: Props) {
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
            backgroundColor: "var(--color-bg-secondary)",
            borderRight: "var(--panel-border-width) solid var(--color-border-subtle)",
            padding: "var(--space-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-1)",
          }}
        >
          {navSections.map((item) => (
            <div
              key={item}
              style={{
                padding: "var(--space-2) var(--space-3)",
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "var(--space-6)",
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
              General
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

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              margin: "0 0 var(--space-4) 0",
            }}
          >
            Profile
          </p>

          {/* Display name input */}
          <div style={{ marginBottom: "var(--space-6)" }}>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-2)",
                fontWeight: 500,
              }}
            >
              Display name
            </label>
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: "100%",
                padding: "var(--space-3)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-md)",
                backgroundColor: "var(--color-bg-primary)",
                border: "var(--panel-border-width) solid var(--color-border-strong)",
                borderRadius: "var(--panel-radius)",
                color: "var(--color-text-primary)",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              margin: "0 0 var(--space-4) 0",
            }}
          >
            Behaviour
          </p>

          {/* Toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "var(--space-4)",
              borderBottom: "var(--panel-border-width) solid var(--color-border-subtle)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-md)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                }}
              >
                Auto-save drafts
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-secondary)",
                  margin: "var(--space-1) 0 0 0",
                }}
              >
                Automatically save while writing
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "var(--color-accent-primary)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
