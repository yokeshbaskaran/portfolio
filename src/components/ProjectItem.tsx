import axios from "axios";
import { useEffect, useState } from "react";
import { IGitHubRepo } from "../utilities/IGithubRepo";
import { RiBookMarkedFill } from "react-icons/ri";

interface ProjectItemProps {
  repsURL: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { repsURL } = props;
  const [repositoriesList, setRepositoriesList] = useState<IGitHubRepo[]>([]);

  // console.log(repositoriesList);

  useEffect(() => {
    (async () => {
      const result = await axios.get<IGitHubRepo[]>(repsURL);
      setRepositoriesList(result.data);
    })();
  }, [repsURL]);

  return (
    <>
      {!repositoriesList.length && <p>No Repos found.</p>}
      {!!repositoriesList.length && (
        <section className="w-[90%] mx-auto grid grid-cols-1 grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 sm:gap-5 p-3">
          {repositoriesList.slice(1).map((repos) => (
            <div key={repos.id}>
              <div className="px-3 py-5 flex flex-col gap-3 bg-mainBgCol border border-slate-600 rounded-lg hover:bg-slate-800 hover:-translate-y-1 transition-transform shadow-lg duration-300 ease-out">
                <div className="capitalize text-xl flex justify-start items-start gap-2 text-blue-600">
                  <span className="text-2xl">
                    <RiBookMarkedFill />
                  </span>
                  <span className="lowercase underline">{repos.name}</span>
                </div>

                <h2 className="text-sm text-gray-500">
                  Repo Name:
                  <a
                    href={repos.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="pl-1  underline text-green-500 ">
                      {repos.full_name}
                    </span>
                  </a>
                </h2>

                <div className="text-sm text-gray-500">
                  Languages used:
                  <span className="text-white pl-2">{repos.language}</span>
                </div>

                {repos.homepage && (
                  <h2 className="text-sm text-gray-500">
                    Live Page:
                    <a href={repos?.homepage} target="_blank" rel="noreferrer">
                      <span className="pl-1  underline text-violet-400">
                        {repos.homepage}
                      </span>
                    </a>
                  </h2>
                )}

                <div className="text-sm text-gray-500 flex flex-col gap-2">
                  Description: <br />
                  <span className="text-white indent-5">
                    {repos.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ProjectItem;
