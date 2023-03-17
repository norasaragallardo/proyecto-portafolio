import { Router } from 'express';
import { deleteUsuarioRed, getUsuarioRed, getUsuariosRed, postUsuarioRed, putUsuarioRed } from '../controllers/usuario_red';

const UsuarioRedrouter = Router();

UsuarioRedrouter.get('/', getUsuariosRed);
UsuarioRedrouter.get('/:id', getUsuarioRed);
UsuarioRedrouter.post('/', postUsuarioRed);
UsuarioRedrouter.put('/:id', putUsuarioRed);
UsuarioRedrouter.delete('/:id', deleteUsuarioRed);

export default UsuarioRedrouter;