import React from "react";

const posts = [
  {
    author: { userId: "authorID1234", name: "Full Name" },
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut expedita, inventore laudantium, est, totam consequatur reiciendis rerum nulla rem quod temporibus atque soluta. Saepe excepturi sequi nulla laboriosam dolorum facere. Cum exercitationem numquam blanditiis quam quae, perspiciatis earum asperiores aperiam fugiat quisquam nesciunt deserunt repudiandae, illum iste quo velit ipsa vitae delectus maxime! Facere labore non dicta, numquam vero rem obcaecati laudantium nihil saepe! Soluta, neque similique quis, unde architecto atque non numquam quam consequatur expedita, laudantium placeat consequuntur optio. Molestias, voluptatem perspiciatis non in amet fuga laboriosam eum laudantium atque molestiae officia optio officiis, soluta doloribus maxime beatae.",
    image: "https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
    title: "Post title",

    id: 1,
  },
  {
    author: { userId: "authorID1234", name: "Full Name" },
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut expedita, inventore laudantium, est, totam consequatur reiciendis rerum nulla rem quod temporibus atque soluta. Saepe excepturi sequi nulla laboriosam dolorum facere. Cum exercitationem numquam blanditiis quam quae, perspiciatis earum asperiores aperiam fugiat quisquam nesciunt deserunt repudiandae, illum iste quo velit ipsa vitae delectus maxime! Facere labore non dicta, numquam vero rem obcaecati laudantium nihil saepe! Soluta, neque similique quis, unde architecto atque non numquam quam consequatur expedita, laudantium placeat consequuntur optio. Molestias, voluptatem perspiciatis non in amet fuga laboriosam eum laudantium atque molestiae officia optio officiis, soluta doloribus maxime beatae.",
    image: "https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
    title: "Post title",

    id: 2,
  },
  {
    author: { userId: "authorID1234", name: "Full Name" },
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut expedita, inventore laudantium, est, totam consequatur reiciendis rerum nulla rem quod temporibus atque soluta. Saepe excepturi sequi nulla laboriosam dolorum facere. Cum exercitationem numquam blanditiis quam quae, perspiciatis earum asperiores aperiam fugiat quisquam nesciunt deserunt repudiandae, illum iste quo velit ipsa vitae delectus maxime! Facere labore non dicta, numquam vero rem obcaecati laudantium nihil saepe! Soluta, neque similique quis, unde architecto atque non numquam quam consequatur expedita, laudantium placeat consequuntur optio. Molestias, voluptatem perspiciatis non in amet fuga laboriosam eum laudantium atque molestiae officia optio officiis, soluta doloribus maxime beatae.",
    image: "https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
    title: "Post title",

    id: 3,
  },
  {
    author: { userId: "authorID1234", name: "Full Name" },
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut expedita, inventore laudantium, est, totam consequatur reiciendis rerum nulla rem quod temporibus atque soluta. Saepe excepturi sequi nulla laboriosam dolorum facere. Cum exercitationem numquam blanditiis quam quae, perspiciatis earum asperiores aperiam fugiat quisquam nesciunt deserunt repudiandae, illum iste quo velit ipsa vitae delectus maxime! Facere labore non dicta, numquam vero rem obcaecati laudantium nihil saepe! Soluta, neque similique quis, unde architecto atque non numquam quam consequatur expedita, laudantium placeat consequuntur optio. Molestias, voluptatem perspiciatis non in amet fuga laboriosam eum laudantium atque molestiae officia optio officiis, soluta doloribus maxime beatae.",
    image: "https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
    title: "Post title",

    id: 4,
  },
];

function ProfilePosts({ user }) {
  return (
    <div className="grid grid-cols-2 gap-5 my-10">
      {posts.map((post) => {
        return (
          <div key={post.id} className="flex items-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-[200px] h-[134px] object-cover mr-5"
            />

            <div>
              <div className="flex items-center">
                <img
                  src={
                    user.profilePicture ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={user.name}
                  className="w-[20px] h-[20px] mr-[10px] rounded-full object-cover "
                />
                <h3>{post.author.name}</h3>
              </div>

              <h1 className="text-[28px] font-semibold">{post.title}</h1>

              <p className="w-[240px] text-[20px] truncate">{post.content}</p>

              <p>Date 20</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProfilePosts;
