export interface UserPublic {
  email: string;
  id: number;
  username: string;
}

export interface UserRow {
  email: string;
  id: number;
  password_hash: string;
  username: string;
}
