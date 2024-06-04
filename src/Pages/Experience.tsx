import ExperItem from "../components/ExperItem";
import { experData } from "../data/db";

const Experience = () => {
  return (
    <>
      <section className="py-5 bg-secBgCol text-white">
        <h2 className="py-8 text-center text-5xl">InternShips & Experience</h2>

        {experData &&
          experData.map((data, index) => (
            <div>
              <ExperItem data={data} key={index} />
            </div>
          ))}
      </section>
    </>
  );
};

export default Experience;
