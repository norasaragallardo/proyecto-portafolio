import { Request, Response } from 'express';
import UsuarioRed from '../models/contactenos';
import Contactenos from '../models/contactenos';

export const getContactenosTodo = async (req: Request, res: Response) => {

  const users = await Contactenos.findAll();

  res.json({
      msg: 'getcontactenos',
      users
  })
}

export const getContactenos = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await Contactenos.findByPk(id);

  if(user){
    res.json({
      msg: 'getContactenos',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'el Contactenos red  no existe',
    })
  }
}

export const postContactenos = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post Contactenos',
      body
  })
}

export const putContactenos = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put Contactenos',
      body,
      id
  })
}

export const deleteContactenos = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete Contactenos',
      id
  })
}