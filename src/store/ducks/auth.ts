
export const Types = {
    LOGIN: 'auth/LOGIN',
    LOGOUT: 'auth/LOGOUT',
  };
  

  
  const initialState = {
    isLogged: false,
    token: null,
    user: {},
  };
  
  type ArticleAction = {
    type: string
  }

  export default function reducer(state = initialState, action:ArticleAction) {
    switch (action.type) {
      case Types.LOGIN:
        return ;
      case Types.LOGOUT:
        return ;
      default:
        return state;
    }
  }
  
  
  export function login(email:string, password:string) {
    return {
      type: Types.LOGIN,
      payload: {
        email,
        password
      },
    }
  }
  
  export function logout() {
    return {
      type: Types.LOGOUT,
    }
  }