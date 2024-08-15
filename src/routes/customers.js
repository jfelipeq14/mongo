import { Router } from 'express'
import { CustomersController } from '../controllers/customers.js'

export const createCustomersRouter = ({ customersModel }) => {
  const customersRouter = Router()

  const customersController = new CustomersController({ customersModel })

  customersRouter.get('/', customersController.getAll)
  customersRouter.post('/', customersController.create)
  customersRouter.put('/:id', customersController.update)
  customersRouter.delete('/:id', customersController.delete)

  return customersRouter
}
