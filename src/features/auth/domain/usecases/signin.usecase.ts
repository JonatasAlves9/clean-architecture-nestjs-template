export interface SignInUseCaseInterface {
  execute(cpf: string, password: string): Promise<any | null>;
}
