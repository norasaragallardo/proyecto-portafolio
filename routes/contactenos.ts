import { Router } from 'express';
import { getContactenosTodo,getContactenos,postContactenos,putContactenos,deleteContactenos } from '../controllers/contactenos';

const contactenosRouter = Router();

contactenosRouter.get('/', getContactenosTodo);
contactenosRouter.get('/:id', getContactenos);
contactenosRouter.post('/', postContactenos);
contactenosRouter.put('/:id', putContactenos);
contactenosRouter.delete('/:id', deleteContactenos);

export default contactenosRouter;