import { BadgeInfo, Lock, PlayCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ByeCourseButton from "@/components/ByeCourseButton";

const CourseDetail = () => {

    const purchasedCourse = false;
  return (
    <div className=" mt-16 space-y-5">
      <div className="bg-[#2D2F31] text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">Course Title</h1>
          <p className="text-base md:text-lg">Course Sub-title</p>
          <p>
            Created By{""}
            <span className="text-[#C0C4FC] underline italic">
              Aayush Jangra
            </span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfo size={16} />
            <p>Last updated </p>
          </div>
          <p>Students enrolled</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="font-bold text-xl md:text-2xl">Description</h1>
          <p>
            Learn how to build fullstack React apps with NextJS 15 & the App
            Router. Build real projects and apply what you learned with hands-on
            projects and examples. Learn about different ways of building NextJS
            app - App Router vs Pages Router.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>4 Lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[1, 2, 3].map((lecture, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span>
                    {true ? <PlayCircle size={14} /> : <Lock size={14} />}
                  </span>
                  <p>lecture Title</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/3">
        <Card>
        <CardContent className="p-4 flex flex-col">
        <div className="w-full aspect-video mb-4">
        React player video here
        </div>
        <h1>Lecture Title</h1>
        <Separator className="my-2" />
        <h1 className="text-lg md:text-xl font-semibold">Course Price</h1>
        </CardContent>
        <CardFooter className="flex justify-center p-4">
              {purchasedCourse ? (
                <Button className="w-full">Continue Course</Button>
              ) : (
                <ByeCourseButton/>
              )}
            </CardFooter>
    
        
        </Card>
    
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;