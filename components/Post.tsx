import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            className="w-10 h-10 rounded-full"
            width={100}
            height={100}
          />
          <span className="font-medium">John Doe</span>
        </div>
        <Image src={"/more.png"} alt="" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/18165739/pexels-photo-18165739/free-photo-of-cimen-cim-tatil-koyu-konak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          laboriosam dignissimos similique ratione perferendis eligendi, fugiat
          numquam praesentium ad delectus rerum hic blanditiis deleniti
          voluptas, id rem odio facilis quisquam impedit adipisci unde ex. Aut
          fugiat reiciendis aliquid architecto sed corporis. Molestias
          architecto aliquam recusandae? Possimus illo doloribus nostrum,
          dolorem officiis voluptatem culpa accusantium impedit, ullam similique
          maxime maiores repellat consequatur eius provident saepe odit ut esse
          quibusdam neque nemo! Necessitatibus, autem voluptatem nam incidunt
          hic ab facilis excepturi earum, quasi consequuntur porro fugit
          reprehenderit culpa? Deleniti repudiandae eius enim, dolorem nostrum
          eum officiis non id quos libero aliquid ratione.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image src={"/like.png"} alt="" width={16} height={16} />
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Post;
