import { Team } from "./team";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string | null;
  emailVerified: boolean | null;
  image: string;
  createdAt: string;
  updatedAt: string;
  githubProfile: string;
  linkedinProfile: string | null;
  projects: string;
  bio: string;
  teamId: string | null;
  team: Team | null
}

export interface UserSession {
  name: string;
  email: string;
  image: string;
}