import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {

  const users = await Usuario.findAll();

  res.json({
      msg: 'getusuarios',
      users
  })
}

export const getUsuario = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await Usuario.findByPk(id);

  if(user){
    res.json({
      msg: 'getusuarios',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'el usuario no existe',
    })
  }
}

export const postUsuario = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post usarios',
      body
  })
}

export const putUsuario = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put usuarios',
      body,
      id
  })
}

export const deleteUsuario = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete usuarios',
      id
  })
}