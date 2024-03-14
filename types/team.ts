import { User } from "./user";

export interface Team {
    id: string;
    teamName: string;
    teamCode: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    githubLink: string | null;
    figmaLink: string | null;
    users: User[];
    createdBy?: User | null;
    createdById?: string | null;
    status: string;
  }
  