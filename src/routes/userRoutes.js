import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/create/', userController.create);

export default router;

/**
 * metodos:
 * index -> lista todos usuarios -> GET
 * store/create -> cria um novo usuario -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH OU PUT
 */
