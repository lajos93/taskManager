import { initialTaskDetail, ITaskDetail } from "./ITaskDetail";

export interface ITaskTree {
    id: string;
    items: ITaskDetail[]
  }

  export interface ITaskTreeSingleDetail {
    id: string;
    items: ITaskDetail
  }

  export const initialTaskTreeSingleDetail = {
    id: '',
    items:initialTaskDetail
  };