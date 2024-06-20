import Item from "./Item";
import React, { useState, useEffect } from "react";

interface LatestItem {
  id: string;
  name: string;
  image: string;
  old_price: number;
  category: string;
  new_price: number;
}

const NewCollection: React.FC = () => {
  const [new_collection, setNew_collection] = useState<LatestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewCollection = async () => {
      try {
        const response = await fetch('http://localhost:4000/newCollection');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNew_collection(data);
        setLoading(false);
      } catch (err) {
        //@ts-ignore
        setError(err.message || 'Unknown error occurred');
        setLoading(false);
      }
    };

    fetchNewCollection();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[99%]">
        <h3 className="h3 text-center">Latest Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {new_collection.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              category={item.category}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
