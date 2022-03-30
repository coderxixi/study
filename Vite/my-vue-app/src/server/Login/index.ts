import XirequestApi from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return XirequestApi.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return XirequestApi.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    // showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return XirequestApi.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    // showLoading: false
  })
}
