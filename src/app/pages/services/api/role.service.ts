import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GetallRolesInputParamsModel,
  GetAllRolesOutputModel,
  roleResponse,
  RolesModel,
} from '../../models/api/roles.model';
import { Observable } from 'rxjs';
import { inputParamModel } from '../../../shared/models/primeng.model';
import { CommonModel } from '../../../shared/models/api/common.model';


@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getallRoles(input: inputParamModel) {
    let params = new HttpParams();
    if (input.SearchTerm) {
      params = params.set('SearchTerm', input.SearchTerm);
    }
    if (input.MaxResultCount) {
      params = params.set('MaxResultCount', input.MaxResultCount);
    }
    if (input.SkipCount) {
      params = params.set('SkipCount', input.SkipCount);
    }
    return this.http.get<GetAllRolesOutputModel>(
      `api/services/app/Role/GetAll`,
      {
        params,
      }
    );
  }
  saveRole(roleData: RolesModel, isUpdate: boolean): Observable<roleResponse> {
    const url = isUpdate
      ? 'api/services/app/Role/Update'
      : 'api/services/app/Role/Create';

    return isUpdate
      ? this.http.put<roleResponse>(url, roleData)
      : this.http.post<roleResponse>(url, roleData);
  }

  deleteRoleByid(id: number): Observable<CommonModel> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<CommonModel>(`api/services/app/Role/Delete`, {
      params,
    });
  }
}
