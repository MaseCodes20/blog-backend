import React from "react";
import { useSelector } from "react-redux";

function NetworkSection() {
  const curriousMinds = useSelector((state) =>
    state.users.users
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 12)
  );

  return (
    <section className="border-b-[1px] border-black bg-[#FFD1B9]">
      <div className="pageContainer py-[66px]">
        <div className="max-w-[965px] mx-auto">
          <h1 className="text-[94px] text-center font-semibold leading-none">
            A living network of curious minds.
          </h1>

          <div className="mx-auto max-w-[612px] mt-5 mb-20">
            <p className="text-center text-[18px] font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              laborum, amet molestiae minus sed ex itaque quisquam quae
              excepturi molestias aliquam autem praesentium eos eligendi saepe
              voluptatem debitis iusto, eveniet vel, sequi laboriosam rem
              laudantium reiciendis. Expedita blanditiis dolore atque?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {curriousMinds.map((writer) => {
            return (
              <div
                key={writer._id}
                className="flex items-center p-5 border-t-[1px] border-b-[1px] border-black"
              >
                <img
                  src={
                    writer.profilePicture ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={writer.name}
                  className="w-[50px] h-[50px] mr-[20px] rounded-full object-cover"
                />

                <h3 className="text-[28px]">{writer.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NetworkSection;
