import userlist from './door.log_devices.json'

export const UserList = defineStore('UserList', {
    state: () => (
      {userlist:userlist }
      ),
    getters: {
        NameList:state=> state.userlist.map(v=> { return {value: v.firstname , text:v.firstname}}),
        RoleList:state => [...new Set(state.userlist.map(v=> v.role))].sort()
    }
  })