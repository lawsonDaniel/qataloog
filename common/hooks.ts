import { parseCookies} from "nookies";

export const GetStoredAuthToken = () => {
    const cookies = parseCookies();
    const storedUser: any = cookies.userToken ? cookies.userToken : null;
    return storedUser;
  };