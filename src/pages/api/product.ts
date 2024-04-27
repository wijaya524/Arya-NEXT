// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveData } from "../lib/db/service";

type Data = {
    status: boolean;
    statusCode: number;
    data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = await retrieveData();
  res.status(200).json({status:true,statusCode:200, data });
}
