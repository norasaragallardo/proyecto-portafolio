import { Request, Response } from 'express';
import Contactenos from '../models/habilidad';
import Habilidad from '../models/habilidad';

export const getHabilidadTodos = async (req: Request, res: Response) => {

  const users = await Habilidad.findAll();

  res.json({
      msg: 'gethabilidad',
      users
  })
}

export const getHabilidadId = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await Habilidad.findByPk(id);

  if(user){
    res.json({
      msg: 'gethabilidad',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'las habilidades no existe',
    })
  }
}

export const postHabilidad = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post habilidad',
      body
  })
}

export const putHabilidad = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put Habilidad',
      body,
      id
  })
}

export const deleteHabilidad = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete Habilidad',
      id
  })
}