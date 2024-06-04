import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CertifyItemProps {
  courseName: string;
  courseImg: string;
  certifyURL: string;
  courseDes: string;
}

interface CertifyProps {
  course: CertifyItemProps;
}

const CertifyItem: React.FC<CertifyProps> = ({ course }: CertifyProps) => {
  return (
    <section className="m-5 rounded-xl shadow-lg overflow-hidden">
      {/* <h2>{course.courseName}</h2> */}

      <div className="relative overflow-hidden">
        <div className="w-full h-[180px]">
          <img
            src={course.courseImg}
            alt="images"
            className="w-full h-auto object-cover hover:opacity-0"
          />
        </div>
        <div className="absolute top-0 left-0 text-white w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 bg-black">
          <a href={course.certifyURL} target="_blank">
            <p className="flex items-center gap-2 hover:text-mainTextCol text-lg">
              View Certifications
              <FaExternalLinkAlt />
            </p>
          </a>
        </div>
      </div>

      {/* <a href={course.certifyURL} target="_blank">
        link here
      </a> */}
      <p className="px-3 py-5 text-center text-xl">{course.courseDes}</p>
    </section>
  );
};

export default CertifyItem;

{
  /**/
}
