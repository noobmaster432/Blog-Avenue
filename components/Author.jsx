import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author && author.photo.url ? author.photo.url : "https://picsum.photos/200/300"}
          unoptimized
          alt={author.name}
          height="100"
          width="100"
          className="align-middle rounded-full mx-auto"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg font-sans">{author.bio}</p>
    </div>
  );
};

export default Author;
