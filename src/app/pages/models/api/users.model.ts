import { CommonModel } from "../../../shared/models/api/common.model";
import { inputParamModel } from "../../../shared/models/primeng.model";


export interface UsersModel {
  userName: string;
  name: string;
  surname: string;
  fullName: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[];
  lastLoginTime?: string;
  password: string;
  id: number;
  phoneNumber: string;
}

export interface getUserResponse extends CommonModel {
  result: {
    items: UsersModel[];
    totalCount: number;
  };
}

export interface userInputParamModel extends inputParamModel {
  userName?: string;
}
