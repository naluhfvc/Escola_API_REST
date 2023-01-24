import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/create/', userController.create);
router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/**
 * metodos:
 * index -> lista todos usuarios -> GET
 * store/create -> cria um novo usuario -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH OU PUT
 */
