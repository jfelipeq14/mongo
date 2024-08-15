import { Router } from 'express'
import { CustomersController } from '../controllers/customers.js'

export const createCustomersRouter = ({ customersModel }) => {
  const customersRouter = Router()

  const customersController = new CustomersController({ customersModel })

  customersRouter.get('/', customersController.getAll)
  customersRouter.get('/:id', customersController.getById)
  customersRouter.post('/logout', customersController.create)
  customersRouter.put('/logout', customersController.update)
  customersRouter.patch('/logout', customersController.updateAtributte)
  customersRouter.delete('/logout', customersController.delete)

  return customersRouter
}
