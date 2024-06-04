import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IGitHubOwner } from "../utilities/IGitHubOwner";

// Define the context type
interface ProfileContextProps {
  userData?: IGitHubOwner;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export function useProfileContext() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContextProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<IGitHubOwner>();

  const API_URL = "https://api.github.com/users/yokeshbaskaran";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const contextValue = { userData };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
