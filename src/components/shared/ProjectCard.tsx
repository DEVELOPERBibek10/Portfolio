import { SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function ProjectCard() {
  return (
    <>
      <motion.div className="w-full">
        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </motion.div>
    </>
  );
}

export default ProjectCard;
