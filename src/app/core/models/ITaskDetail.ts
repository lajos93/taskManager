export interface ITaskDetail {
  id: string;
  dueDate?: Date | string;
  title: string;
  description?: string;
  priority?: number;
  project?: string;
  color?: string;
  sprint?: string;
  createdAt?:Date | string;
  updatedAt?:Date | string;
}

export const initialTaskDetail = {
  id: '',
  title: '',

};
