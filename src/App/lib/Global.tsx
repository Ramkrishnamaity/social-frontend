import { Location } from "react-router-dom";
import { RoutesData } from "./DataSet/Global";

export const AcctiveManu = (item: RoutesData, currentUrl: Location ): string | undefined => {
    const fristPath: string = currentUrl.pathname.split("/")[2] || currentUrl.pathname.split("/")[1];
    if ((fristPath === "dashboad" && item.path === "") || fristPath === item.path) {
        return "active";
    } 
}