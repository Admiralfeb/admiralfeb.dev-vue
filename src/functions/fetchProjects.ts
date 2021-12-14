import { API_URL } from "@/constants";
import { IProject } from "@/models/project";
import axios from "axios";
import { genericSortArray } from "./sort";

export const fetchProjects = async (): Promise<IProject[]> => {
  const response = await axios.get<IProject[]>(`${API_URL}/projects`);
  const sortedData = genericSortArray(response.data ?? [], {
    order: "asc",
    orderBy: "name",
  });
  return sortedData;
};
