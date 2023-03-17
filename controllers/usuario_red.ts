import { Request, Response } from 'express';
import UsuarioRed from '../models/usuario_red';

export const getUsuariosRed = async (req: Request, res: Response) => {

  const users = await UsuarioRed.findAll();

  res.json({
      msg: 'getusuario_red',
      users
  })
}

export const getUsuarioRed = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await UsuarioRed.findByPk(id);

  if(user){
    res.json({
      msg: 'getusuarios_red',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'el usuario red  no existe',
    })
  }
}

export const postUsuarioRed = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post usarios_red',
      body
  })
}

export const putUsuarioRed = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put usuarios_red',
      body,
      id
  })
}

export const deleteUsuarioRed = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete usuarios_red',
      id
  })
}