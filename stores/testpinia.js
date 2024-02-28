export const useCounterStore = defineStore('counter', {
    state: () => (
      {userlist:[], login:false, count: 0, name: 'Eduardo' }
      ),
    getters: {
      doubleCount: (state) => state.count * 2,
       getUserList: (state) => state.userlist
    },
    actions: {
     pushUser(val){
        return this.userlist.push(val)
      },
        logedin(){ 
            return this.login
        } ,
        logedintoggle(){
            this.login = !this.login
        } ,
      increment() {
        this.count++
      },
    },
  })