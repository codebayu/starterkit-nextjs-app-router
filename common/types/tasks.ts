export interface ITask {
  id: string
  task: string
  type: 'feature' | 'bug' | 'refactor'
  priority: 'low' | 'medium' | 'high'
}
