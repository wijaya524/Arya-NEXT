import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "../lib/db/service";

type Data = {
  status: boolean;
  massage: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
     await signUp(req.body, ({status, massage} : {status: boolean, massage: string}) => {
       if(status){
        res.status(200).json({status, massage});
      }else{
         res.status(400).json({status, massage});
       }
     })
  }else {
    res.status(400).json({ status: false, massage: "Method not allowed" });
  }
}
