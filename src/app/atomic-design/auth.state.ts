import {State} from "@ngxs/store";

export interface AuthStateModel {
  isAuthenticated: boolean;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false,
  },
})
export class AuthState {
  // ...
}
