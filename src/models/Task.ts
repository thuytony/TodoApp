export class Task {
  id: number
  taskName: string
  isFinish: Boolean

  constructor(id: number, taskName: string, isFinish: Boolean) {
    this.id = id;
    this.taskName = taskName;
    this.isFinish = isFinish;
  }
}
