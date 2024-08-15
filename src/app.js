import { Server } from './models/server.js'
import { createCustomersRouter } from './routes/customers.js'
import { CustomersModel } from './models/customers.js'

const server = new Server()
const customersModel = new CustomersModel()

server.app.use('/customers', createCustomersRouter({ customersModel }))
server.listen()
