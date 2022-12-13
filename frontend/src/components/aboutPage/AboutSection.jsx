import React from "react";

function AboutSection() {
  return (
    <section className="border-b-[1px] border-black">
      <div className="pageContainer lg:flex">
        <div className="flex-[2] py-10 pr-20 lg:border-r-[1px] border-black font-semibold">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            natus explicabo, eveniet laboriosam repudiandae consequuntur magni
            qui, itaque mollitia ab tempora ad. Quia dolorum sed natus nihil
            dolore excepturi, quibusdam unde qui magni odio. Beatae impedit
            suscipit iusto ea voluptatibus deleniti delectus eaque dolores quas
            eius alias, non quasi voluptates ipsa rem sequi culpa qui illo saepe
            totam distinctio eos!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio
            soluta consequatur, aspernatur earum nemo, voluptate numquam fugiat
            dolor debitis pariatur fugit laboriosam repellat voluptatem!
            Obcaecati nemo voluptas fuga voluptatem temporibus enim alias, amet
            ratione accusantium repudiandae excepturi, consequuntur facilis
            quae, repellat iusto fugiat sit voluptatum unde sequi delectus
            reiciendis aperiam praesentium sunt. Inventore fugiat quod amet,
            similique odio accusantium. Iste, dolorem et. Rem autem accusantium
            aliquid voluptas, a odio, ab facere suscipit cupiditate velit
            repellat. Ea neque ab excepturi!
          </p>
        </div>
        <div className="flex-[2]  lg:pl-20">
          <div className="flex items-center justify-center">
            <iframe
              src="https://player.vimeo.com/video/467834328?autoplay=1&loop=1&autopause=0&background=1"
              allow="autoplay; fullscreen"
              width="100%"
              height="460"
              title="Globe Final from Ryan Hubbard on Vimeo"
              allowFullScreen={false}
            >
              Globe Final from Ryan Hubbard on Vimeo
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
