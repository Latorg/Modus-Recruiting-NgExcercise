export interface User {
  firstName: string;
  lastName: string;
}

export interface UserApi {
  id?: Int16Array;
  first_name?: string;
  last_name?: string;
  email?: string;
  avatar?: string;
}

export interface ListUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserApi[];
}

export interface SingleUserResponse {
  data: UserApi;
  ad: {
    company: string;
    url: string;
    text: string;
  };
}
