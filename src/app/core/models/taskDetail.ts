export interface ITaskDetail {
  id: string;
  dueDate: string;
  title: string;
  description: string;
  priority: number;
  project: string;
  color: string;
  sprint?: string;
}

export const initialTaskDetal = {
  id: '',
  dueDate: '',
  title: '',
  description: '',
  priority: NaN,
  project: '',
  color: '',
};
