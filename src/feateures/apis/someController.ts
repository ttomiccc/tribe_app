// 쿼리 통일
// DTO TS
import { User } from "../../types/entities/user";

interface GetUser {
  user: User;
}

interface GetUserList {
  users: User[];
}

