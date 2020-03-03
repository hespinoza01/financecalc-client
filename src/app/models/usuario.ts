export class Usuario{
  constructor(
    public id: string,
    public unsername: string,
    public password: string,
    public fullName: string,
    public updateDate: string,
    public enabled: number
  ){}
}
