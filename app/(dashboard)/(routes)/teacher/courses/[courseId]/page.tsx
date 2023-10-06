"use client";

import { useParams } from "next/navigation";

const CoursePage = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  return <div> Course Id : {params.courseId} </div>;
};
export default CoursePage;
