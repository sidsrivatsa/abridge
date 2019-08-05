import { UserDao } from "@daos";
import { logger } from "@shared";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";

// Init shared
const router = Router();
const urlDao = new UserDao();
export const paramMissingError =
 "One or more of the required parameters was missing.";

// Init routes
export const getUsersPath = "/all";
export const addUserPath = "/add";
export const updateUserPath = "/update";
export const deleteUserPath = "/delete/:id";

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get(getUsersPath, async (req: Request, res: Response) => {
 try {
  const urls = await urlDao.getAll();
  return res.status(OK).json({ urls });
 } catch (err) {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
   error: err.message
  });
 }
});

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post(addUserPath, async (req: Request, res: Response) => {
 try {
  const { user } = req.body;
  if (!user) {
   return res.status(BAD_REQUEST).json({
    error: paramMissingError
   });
  }
  await urlDao.add(user);
  return res.status(CREATED).end();
 } catch (err) {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
   error: err.message
  });
 }
});

/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

router.put(updateUserPath, async (req: Request, res: Response) => {
 try {
  const { user } = req.body;
  if (!user) {
   return res.status(BAD_REQUEST).json({
    error: paramMissingError
   });
  }
  user.id = Number(user.id);
  await urlDao.update(user);
  return res.status(OK).end();
 } catch (err) {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
   error: err.message
  });
 }
});

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

router.delete(deleteUserPath, async (req: Request, res: Response) => {
 try {
  await urlDao.delete(Number(req.params.id));
  return res.status(OK).end();
 } catch (err) {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
   error: err.message
  });
 }
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
