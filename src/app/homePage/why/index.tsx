import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Why {
  id: number;
  icon: string;
  title: string;
  about: string;
  // Add other properties as needed
}
const fetchProducts = async (): Promise<Why[]> => {
  const response = await axios.get("/why.json");
  return response.data as Why[];
};

const WhyJoin: React.FC = () => {
  const [products, setProducts] = useState<Why[]>([]);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);
  // console.log(products);

  return (
    <>
      <section className="px-6 py-10 md:py-15 md:px-10  ">
        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent md:text-3xl text-4xl text-center py-5">
          Why Join Tejgaon College Programming Club ?
        </h2>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map?.(
            (s: { id: number; icon: string; title: string; about: string }) => (
              <div key={s.id}>
                <div className="rounded-xl p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-secondary shadow-lg shadow-teal-500/40">
                    <Image src={s.icon} alt="icons" width={20} height={20} />
                  </div>
                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                    {s.title}
                  </h1>
                  <p className="px-4 text-gray-500">{s.about}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default WhyJoin;
