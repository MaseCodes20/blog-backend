import React, { useEffect, useState } from "react";

function JoinSection() {
  const [curriousMinds, setCurriousMinds] = useState([]);

  useEffect(() => {
    const people = [...Array(6)].map((_, i) => ({
      name: "Full Name",
      jobTitle: "Novelist, Screenwriter and social psychologist",
      profilePicture: "",
      id: i,
    }));

    setCurriousMinds(people);
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="flex pageContainer py-10">
        <div className="flex-[2]">
          <p className="text-[78px] max-w-[575px] leading-none">
            Join a network of curious minds.
          </p>
        </div>
        <div className="flex-[2]">
          {curriousMinds.map((writer) => {
            return (
              <div className="flex items-center py-[10px] border-white border-t-[.08px] border-b-[.08px]">
                <img
                  src={
                    writer.profilePicture ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={writer.name}
                  className="w-[50px] h-[50px] mr-[10px] rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[24px] font-semibold">{writer.name}</h3>

                  <p className="text-[15px] uppercase">{writer.jobTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JoinSection;
