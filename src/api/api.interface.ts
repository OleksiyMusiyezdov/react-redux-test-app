import { INews } from "../redux/interfaces";

export interface IApiResponse<T> {
  success: boolean;
  code: number;
  data?: T;
  error?: string;
}

export type IGetNewsResponse = Array<INews>;
