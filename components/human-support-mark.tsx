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

      {/* four chips on the cardinal points of the inner orbit */}
      <ChannelChip x={210} y={84} label="phone call">
        <path
          d="M-7-9h4l2 5-2.5 2a12 12 0 0 0 5.5 5.5l2-2.5 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1-9-7a2 2 0 0 1 2-2Z"
          fill="#071A4D"
        />
      </ChannelChip>

      <ChannelChip x={336} y={210} label="email">
        <g fill="none" stroke="#071A4D" strokeWidth="2.4" strokeLinejoin="round">
          <rect x="-10" y="-7" width="20" height="14" rx="2.5" />
          <path d="m-10-6 10 8 10-8" />
        </g>
      </ChannelChip>

      {/* completed intake: a page being written up */}
      <ChannelChip x={210} y={336} label="completed intake">
        <g
          fill="none"
          stroke="#071A4D"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4-11h-11a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V-5Z" />
          <path d="M4-11v6h4" />
          <path d="M-5-2h7M-5 3h9M-5 8h5" />
        </g>
        {/* pencil, crossing the lower right corner */}
        <g transform="translate(7 6) rotate(-45)">
          <rect x="-2.6" y="-7.5" width="5.2" height="11" rx="1.1" fill="#071A4D" />
          <path d="M-2.6 3.5h5.2L0 7.6Z" fill="#071A4D" />
        </g>
      </ChannelChip>

      {/* the firm's decision */}
      <ChannelChip x={84} y={210} label="the firm decides">
        <g fill="#071A4D">
          {/* mallet raised to the upper left, handle falling to the right */}
          <g transform="translate(1 -3) rotate(40)">
            <rect x="-12.5" y="-4.8" width="13.5" height="9.6" rx="2.9" />
            <rect x="0.5" y="-1.9" width="12" height="3.8" rx="1.9" />
          </g>
          {/* the block it strikes */}
          <rect x="-10.5" y="8" width="21" height="4.2" rx="2.1" />
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
