import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    projectLink: string;
    description: string;
    pictures: string[];
    tags: Tag[];

}