"use client";

import { useState } from "react";

/** Email button: copies the address, and still works as a mailto link if copying isn't allowed. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <a
      className="btn"
      href={`mailto:${email}`}
      onClick={(e) => {
        if (!navigator.clipboard) return;
        e.preventDefault();
        navigator.clipboard.writeText(email).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          },
          () => {
            window.location.href = `mailto:${email}`;
          },
        );
      }}
    >
      {email} <span style={{ color: "#BDBBB4" }} aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </a>
  );
}
