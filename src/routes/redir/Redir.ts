import { UserDao } from "@daos";
import { logger } from "@shared";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";

// Init shared
const router = Router();
const urlDao = new UserDao();
export const paramMissingError =
 "One or more of the required parameters was missing.";

router.get("/:url", async (req: Request, res: Response) => {
 try {
  console.log(req.params);
  const urls: Array<any> = await urlDao.getAll();
  urls.forEach(element => {
   if (element.email === req.params.url)
    return res.status(OK).json(element.name);
  });
  return res.status(OK).json("ERROR");
 } catch (err) {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
   error: err.message
  });
 }
});

export default router;
