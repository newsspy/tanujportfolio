import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
    <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
      <ItemLayout
        className={
          " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        }
      >
        <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
        Social Orix
        </h2>
        <p className="font-light  text-xs sm:text-sm md:text-base   ">
        My journey of web development is started 3 years ago. I have good command in 
          HTML, CSS and JavaScript and I also know (three.js and gsap for 3d website animation etc.)
          Join me as I continue to explore new spells and technologies to 
          shape the future of the web.
        </p>
      </ItemLayout>

      <ItemLayout
        className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
      >
        <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          15+ <sub className="font-semibold text-base">clients</sub>
        </p>
      </ItemLayout>

      <ItemLayout
        className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
      >
        <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          3+{" "}
          <sub className="font-semibold text-base">years of experience</sub>
        </p>
      </ItemLayout>


        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="tanuj"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="tanuj"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="tanuj"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="tanuj"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="tanuj"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
