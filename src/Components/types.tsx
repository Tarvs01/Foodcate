export interface ResponseMessage {
  _id: string;
  name: string;
  image: string;
  email: string;
  token: string;
}

export interface UserProfile {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
}

type setter = (data: ResponseMessage) => void;

export interface ContextItems {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  setUserData: setter;
}
