export interface CommanFetchType<T> {
  data: T;
}
export interface LoginApiResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
