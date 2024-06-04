import ForeignBranch from "@/components/main/ForeignBranch/ForeignBranch";
import Header from "@/components/main/Header/Header";
import Loading from "@/components/main/Loading/Loading";
import CoverSwiper from "@/components/main/Cover/CoverSwiper";
import About from "@/components/main/Home/About";
import TrainingBanner from "@/components/main/Home/TrainingBanner";
import ProjectSwiper from "@/components/main/Home/ProjectSwiper";
import Blog from "@/components/main/Home/Blog";
import FacebookEmbed from "./FacebookEmbed";

export default function Home() {
  const subjectColor = "#455A64";
  return (
    <>
        <Loading />
        {/* cover */}
        <CoverSwiper />
        {/* About Us */}
        <About />
        {/* Project Swiper */}
        <ProjectSwiper />
        {/* Safety Training */}
        <TrainingBanner />
        <div className="container mx-auto">
            {/* Blog */}
            <Blog />
            {/*FB & YT */}
            <FacebookEmbed url="https://www.facebook.com/rentalmachines/" />
            <ForeignBranch title="บริษัทในเครือ" color={subjectColor} />
        </div>
    </>
  );
}
