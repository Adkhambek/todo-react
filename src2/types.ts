export type BodyType = LoginInterface;

export interface LoginInterface {
  login: string;
  password: string;
}

export interface UserInterface {
  name: string;
  role: string;
}

export interface TodoInterface {
  id: number;
  title: string;
  description: string;
  createdBy: string;
}
