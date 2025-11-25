export interface UserItem {
  id: number;
  name: string;
  email: string;
  phoneNumber: string | null;
  role: 'USER' | 'ADMIN';
  createdAt: string;
}

export interface GetUsersParams {
  page?: number;
  limit?: number;
  q?: string;
}

export interface GetUsersResponse {
  success: true;
  message: string;
  data: {
    users: UserItem[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface UsersState {
  users: UserItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
}
