export interface IQuestion {
  id: number,
  title: string,
  options: { id: number, title: string }[]
}
