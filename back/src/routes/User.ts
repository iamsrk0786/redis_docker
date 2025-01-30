import { Router } from 'express';
import { createUserController, loginUserController, getAllUsersController, getUserController, updateUserController, deleteUserController, } from '../controller/User';
import authMiddleware from '../middleware/Auth';
const app = Router();

app.post('/', createUserController);
app.post('/login', loginUserController);
app.get('/',authMiddleware, getAllUsersController);

// app.get('/:id', getUserController);
// app.put('/:id', updateUserController);
app.route('/:id').get(authMiddleware, getUserController).put(authMiddleware,updateUserController).delete(authMiddleware,deleteUserController);

export default app;