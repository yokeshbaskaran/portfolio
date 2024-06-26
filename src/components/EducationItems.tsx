interface AcademyImgProps {
  imageURL: string;
}

export const AcademyImg = ({ imageURL }: AcademyImgProps) => {
  return (
    <div className="w-full max-md:w-[95%] mx-auto">
      <div className="p-5 w-[85%] mx-auto border-2 border-secBgCol shadow-lg shadow-mainBgCol rounded-full ">
        <img className="p-1 md:p-3" src={imageURL} alt="profile-image" />
      </div>
    </div>
  );
};

export const AcademyDetails = () => {
  return <div>EducationItems</div>;
};
