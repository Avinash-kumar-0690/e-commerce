type CartifyLogoProps = {
  size?: number;
};

const CartifyLogo = ({ size = 200 }: CartifyLogoProps) => {
  return (
    <svg
      width={size}
      height={(size * 64) / 240}
      viewBox="0 0 240 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cartify logo"
    >
      {/* Cart icon */}
      <g transform="translate(8,8)">
        {/* Motion dots */}
        <circle cx="6" cy="28" r="2" fill="#7DD3FC" />
        <circle cx="2" cy="32" r="1.5" fill="#7DD3FC" opacity="0.8" />

        {/* Cart body */}
        <rect
          x="12"
          y="18"
          width="34"
          height="20"
          rx="5"
          fill="#38BDF8"
        />

        {/* Handle */}
        <path
          d="M4 12 H12 V18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Wheels */}
        <circle cx="20" cy="42" r="3" fill="currentcolor" />
        <circle cx="38" cy="42" r="3" fill="currentcolor" />
      </g>

      {/* Text */}
      <text
        x="72"
        y="42"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="currentcolor"
      >
        Cartify
      </text>
    </svg>
  );
};

export default CartifyLogo;