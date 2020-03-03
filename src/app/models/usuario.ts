export class Usuario{
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public fullName: string,
    public updateDate: string,
    public enabled: number
  ){}
}
