export interface SignInUseCaseInterface {
  execute(username: string, password: string): Promise<any | null>;
}
