export type Auth = {
  email: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: Function;
  logout: Function;
}