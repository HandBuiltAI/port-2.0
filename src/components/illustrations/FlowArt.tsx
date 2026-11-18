// Placeholder line art for the four flow steps. Scott will replace these with his own artwork style.

export function InputsArt() {
  return (
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <path className="fl" d="M30 60 l90 -14 l14 96 l-90 14 z" />
      <path className="fl" d="M44 46 l92 6 l-6 98 l-92 -6 z" />
      <path className="fl" d="M40 40 h94 v100 h-94 z" />
      <path className="ln" d="M56 66 c14 -6 22 6 36 0 s20 -6 26 0" />
      <path className="ln" d="M56 88 l58 -4" />
      <path className="ln" d="M56 110 c10 6 20 -6 30 0" />
      <rect className="sun" x="104" y="104" width="48" height="44" transform="rotate(8 128 126)" />
      <path className="ln" d="M112 120 h26 M112 132 h18" transform="rotate(8 128 126)" />
    </svg>
  );
}

export function ConnectArt() {
  return (
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <circle className="fl" cx="90" cy="92" r="30" />
      <path className="ln" d="M80 86 v-8 M100 86 v-8 M78 100 c8 8 16 8 24 0" />
      <path className="ln" d="M60 92 h-26 M120 92 h26 M90 62 v-26 M90 122 v26" />
      <rect className="fl" x="14" y="80" width="24" height="24" rx="4" />
      <rect className="sun" x="18" y="84" width="16" height="16" rx="2" />
      <circle className="fl" cx="158" cy="92" r="14" />
      <path className="ln" d="M151 97 l7 -14 l7 14 M154 92 h8" />
      <rect className="fl" x="76" y="10" width="28" height="30" rx="3" />
      <path className="ln" d="M82 20 h16 M82 28 h12" />
      <path className="fl" d="M76 150 h28 l-4 22 h-20 z" />
    </svg>
  );
}

export function JudgmentArt() {
  return (
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <rect className="fl" x="18" y="24" width="110" height="130" rx="10" />
      <path className="ln" d="M36 52 h70 M36 74 h56 M36 96 h66" />
      <path className="ln" d="M36 122 l12 12 l26 -28" style={{ strokeWidth: 3.4 }} />
      <path className="fl" d="M150 112 c-10 -8 -28 -6 -36 4 l-24 30 c-6 8 -4 20 6 24 l40 16" />
      <rect className="fl" x="100" y="70" width="12" height="80" rx="3" transform="rotate(-34 106 110)" />
      <ellipse className="sun" cx="60" cy="120" rx="30" ry="18" opacity=".9" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

export function ResultArt() {
  return (
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <rect className="fl" x="30" y="20" width="120" height="146" rx="14" />
      <path className="ln" d="M50 50 h80 M50 72 h60" />
      <rect className="fl" x="50" y="90" width="80" height="40" rx="8" />
      <circle className="sun" cx="138" cy="146" r="26" />
      <path className="ln" d="M126 146 l9 9 l17 -19" style={{ strokeWidth: 3.4 }} />
    </svg>
  );
}

export function ArrowArt() {
  return (
    <svg viewBox="0 0 90 40" aria-hidden="true">
      <path className="ln" d="M4 22 c24 -14 50 -14 76 0 m-12 -10 l12 10 l-14 6" />
    </svg>
  );
}

export function WaveArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <circle className="sun" cx="120" cy="80" r="56" />
      <path
        className="fl"
        d="M60 190 l10 -70 c2 -12 18 -14 22 -2 l2 -40 c0 -12 18 -12 18 0 l0 34 l4 -44 c1 -12 18 -11 18 1 l-2 46 l8 -34 c3 -11 19 -8 17 4 l-8 52 c-4 28 -20 50 -46 56"
      />
    </svg>
  );
}
