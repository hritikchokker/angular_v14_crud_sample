let taskId = 0;
export class Tasks implements TasksModel {
  private name!: string;
  private author!: string;
  private message!: string;
  taskId = taskId;
  constructor(name = '', author = '', message = '') {
    this.name = name;
    this.author = author;
    this.message = message;
    this.taskId = ++taskId;
  }

  getTaskData(): {
    name: string;
    author: string;
    message: string;
    id: number;
  } {
    return {
      name: this.name,
      author: this.author,
      message: this.message,
      id: this.taskId,
    };
  }
}

export interface TasksModel {
  taskId: number;
  getTaskData: () => {
    name: string;
    author: string;
    message: string;
    id: number;
  };
}
export type TasksModelType = {
  name: string;
  author: string;
  message: string;
  id: number;
  tasksUrl?: string;
};
