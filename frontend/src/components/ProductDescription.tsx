const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-0">
        <p className="text-sm">
          Inspired by the original low-profile tennis shoes, the Nike Killshot 2
          updates the upper with various textured leathers to create a fresh
          look. From soft suedes to smooth leathers with the perfect sheen, it's
          courtside attitude with a modern touch. To prove you're on top, the
          rubber gum sole adds the cherry on bottom.
        </p>
        <p className="text-sm">
          Created for the hardwood but taken to the streets, the basketball icon
          returns with classic details and throwback hoops flair. Channeling
          '80s vibes, its padded, low-cut collar lets you take your game
          anywhere—in comfort.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
