import { AuthRequest } from "./DataSet/Auth";
import { reactLocalStorage } from "reactjs-localstorage";

export async function CheckingToken(): Promise<AuthRequest | undefined> {
    const getClientData = reactLocalStorage.getObject('ClientData')
    const ClientData: any = Object.keys(getClientData).length !== 0 ? getClientData : null;
    if (ClientData) {
        return ClientData;
    }
}

export function checkingAuth(): any | false {
    let token = reactLocalStorage.get('token');
    if (token) {
        return token;
    }
    return false;
}

export const ClearAuth = (): void => {
    reactLocalStorage.remove('ClientData')
    reactLocalStorage.remove('token')
}
