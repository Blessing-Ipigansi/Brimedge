
function CarouselButtonLeft({ action }) {
  return (
    <button className="pointer-events-auto" onClick={action}>
      <svg
        className="w-[40px] h-[40px] text-brim-blue/95 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 5 14 14"
        fill="none"
      >
        <path
          style={{ filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.25))' }}
          d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
          fill="currentcolor"
          stroke="white"
          strokeWidth="0.2px"
        />
      </svg>
    </button>
  );
}

export default CarouselButtonLeft

