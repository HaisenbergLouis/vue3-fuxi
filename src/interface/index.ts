export interface ITasklist {
  id: string
  title: string
  status: 'OK' | 'start' | 'ing' | 'err'
  createdAt: string
  isfinish: false | true
}
