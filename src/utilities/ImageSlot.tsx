import { ReactNode } from "react";

interface ImageContainerProps {
  children: ReactNode;
}
export const ImageContainer = ({ children }: ImageContainerProps) => {
  return (
    <div className="mt-2 flex flex-wrap justify-start items-center">
      {children}
    </div>
  );
};

interface ImageSlotProps {
  imgName: string;
  imageURL: string;
}

export const ImageSlot = ({ imgName, imageURL }: ImageSlotProps) => {
  return (
    <>
      <div className="w-[50px]  mt-2 mx-4 object-top overflow-hidden">
        <img src={imageURL} alt="imgName" title={imgName} />
      </div>
    </>
  );
};
