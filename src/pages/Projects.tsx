import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import { motion } from "motion/react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCardInfo } from "@/constants/Projects";
import ProjectCard from "@/components/shared/ProjectCard";

const Projects = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <section id="projects" className=" px-6 my-32 ">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs opacity-50 font-medium">Browse My Recent</p>
            <h2 className="text-3xl font-bold">Projects</h2>
          </motion.div>
          <motion.div className="project-swiper flex justify-between items-center mx-auto  max-w-[82%] mt-5">
            <Button
              className={cn(
                "w-14 h-14 cursor-pointer rounded-full asthetic-shadow bg-white hover:bg-white text-black mr-3"
              )}
              onClick={() => swiper?.slidePrev()}
            >
              <ChevronLeft className="size-3/4" />
            </Button>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              slidesPerView={3}
              spaceBetween={20}
              mousewheel={true}
              keyboard={true}
              onSwiper={setSwiper}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
              {ProjectCardInfo.map(
                ({
                  title,
                  image,
                  techStack,
                  description,
                  githubUrl,
                  liveUrl,
                }) => (
                  <SwiperSlide className="mb-12">
                    <ProjectCard
                      image={image}
                      key={title}
                      title={title}
                      description={description}
                      techStack={techStack}
                      githubUrl={githubUrl}
                      liveUrl={liveUrl}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <Button
              className={cn(
                "w-14 h-14 ml-3 rounded-full cursor-pointer asthetic-shadow bg-white hover:bg-white text-black"
              )}
              onClick={() => swiper?.slideNext()}
            >
              <ChevronRight className="size-3/4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
