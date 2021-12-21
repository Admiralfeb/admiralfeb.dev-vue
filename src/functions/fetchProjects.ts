import { IProject } from '@/models/project';
import { apiClient } from '@/services/server';
import { genericSortArray } from './sort';

export const fetchProjects = async (): Promise<IProject[]> => {
  const response = await apiClient.get<IProject[]>(`/projects`);
  const sortedData = genericSortArray(response.data ?? [], {
    order: 'asc',
    orderBy: 'name',
  });
  return sortedData;
};
