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
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          laborum ea explicabo quis delectus asperiores, dignissimos veniam,
          sequi natus ipsum modi id ullam harum consequatur voluptatem suscipit,
          recusandae eligendi exercitationem sit repellendus perferendis fuga
          reiciendis ipsam ducimus. Ipsum ab voluptates voluptate minima,
          suscipit quia ipsa placeat, et eveniet laudantium dolorum!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          assumenda qui aspernatur impedit quo rem nihil! Tempora earum vitae
          soluta hic labore corporis placeat fugit vero nisi, est quia
          obcaecati.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
