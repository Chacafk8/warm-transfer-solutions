import Image from "next/image";

/**
 * Hero mark for the Services page: an agent ringed by the channels an inquiry
 * arrives through.
 *
 * Pass `photo` to show a real person in the centre — a photograph of an actual
 * agent says more here than any drawing can, given what this page claims. With
 * no photo it falls back to the drawn figure, so the hero is never empty.
 */
export function HumanSupportMark({
  className = "",
  photo,
  photoAlt = "One of our intake agents",
}: {
  className?: string;
  photo?: string;
  photoAlt?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {photo && (
        // Sits over the centre disc, matching its 88/420 radius.
        <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-[41.9%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-2 ring-teal-200/40">
          <Image
            src={photo}
            alt={photoAlt}
            fill
            sizes="(min-width: 1024px) 180px, 0px"
            className="object-cover"
          />
        </div>
      )}
      <MarkSvg hideFigure={Boolean(photo)} />
    </div>
  );
}

function MarkSvg({ hideFigure }: { hideFigure: boolean }) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="An intake agent wearing a headset, surrounded by the phone, message and email channels a caller can arrive through."
      className="w-full"
      fill="none"
    >
      <defs>
        <linearGradient id="hsm-disc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#26C1D1" />
          <stop offset="55%" stopColor="#0B4FA3" />
          <stop offset="100%" stopColor="#0b2b53" />
        </linearGradient>
        <linearGradient id="hsm-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4fd8e9" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3d85f5" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="hsm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#09A8BD" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#09A8BD" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft halo */}
      <circle cx="210" cy="210" r="190" fill="url(#hsm-glow)" />

      {/* orbits — the outer one turns slowly */}
      <g className="hsm-spin" style={{ transformOrigin: "210px 210px" }}>
        <circle
          cx="210"
          cy="210"
          r="168"
          stroke="url(#hsm-ring)"
          strokeWidth="1.5"
          strokeDasharray="3 12"
          strokeLinecap="round"
        />
      </g>
      <circle cx="210" cy="210" r="126" stroke="#4fd8e9" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* centre disc */}
      <circle cx="210" cy="210" r="88" fill="url(#hsm-disc)" />
      <circle cx="210" cy="210" r="88" stroke="#8fe9f3" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* agent: headset band, ear cups, mic boom, head and shoulders */}
      {!hideFigure && (
      <g stroke="#eaf3ff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
        {/* headset band over the crown */}
        <path d="M166 194v-8a44 44 0 0 1 88 0v8" />
        {/* ear cups */}
        <rect x="158" y="184" width="19" height="30" rx="9" fill="#eaf3ff" stroke="none" />
        <rect x="243" y="184" width="19" height="30" rx="9" fill="#eaf3ff" stroke="none" />
        {/* mic boom, stopping well clear of the shoulders */}
        <path d="M252 214v6a12 12 0 0 1-12 12h-9" strokeWidth="5.5" />
        <circle cx="228" cy="232" r="4.5" fill="#eaf3ff" stroke="none" />
        {/* head and shoulders */}
        <circle cx="210" cy="186" r="23" />
        <path d="M172 262a38 38 0 0 1 76 0" />
      </g>
      )}

      {/* channel chips on the inner orbit */}
      <ChannelChip x={210} y={84} label="call">
        <path
          d="M-7-9h4l2 5-2.5 2a12 12 0 0 0 5.5 5.5l2-2.5 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1-9-7a2 2 0 0 1 2-2Z"
          fill="#071A4D"
        />
      </ChannelChip>

      <ChannelChip x={104} y={272} label="message">
        <path
          d="M-9-8h18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H-1l-6 5v-5h-2a2 2 0 0 1-2-2V-6a2 2 0 0 1 2-2Z"
          fill="#071A4D"
        />
      </ChannelChip>

      <ChannelChip x={316} y={272} label="email">
        <g fill="none" stroke="#071A4D" strokeWidth="2.4" strokeLinejoin="round">
          <rect x="-10" y="-7" width="20" height="14" rx="2.5" />
          <path d="m-10-6 10 8 10-8" />
        </g>
      </ChannelChip>
    </svg>
  );
}

function ChannelChip({
  x,
  y,
  label,
  children,
}: {
  x: number;
  y: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <g transform={`translate(${x} ${y})`} aria-label={label}>
      <circle r="30" fill="#071A4D" />
      <circle r="30" fill="#8fe9f3" fillOpacity="0.12" />
      <circle r="30" stroke="#8fe9f3" strokeOpacity="0.45" strokeWidth="1.5" />
      <circle r="22" fill="#8fe9f3" />
      {children}
    </g>
  );
}
