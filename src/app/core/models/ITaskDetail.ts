export interface ITaskDetail {
  id: string;
  dueDate?: string;
  title: string;
  description?: string;
  priority?: number;
  project?: string;
  color?: string;
  sprint?: string;
  createdAt?:string;
  updatedAt?:string;
}

export const initialTaskDetail = {
  id: '',
  title: '',

};
