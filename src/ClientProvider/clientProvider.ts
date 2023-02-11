import { QueryClient } from "react-query";

import axios from "./axiosConfig";

const queryClient = new QueryClient();
// All defualt query API goes here
void axios.get("/");
// All default mutation API goes here

export default queryClient;
