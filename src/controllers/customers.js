export class CustomersController {
  constructor ({ customersModel }) {
    this.customersModel = customersModel
  }

  getAll = async (req, res) => {
    const data = await this.customersModel.getAll()
    res.json(data)
  }

  // getById = async (req, res) => {
  //   const data = await this.customersModel.getById()
  //   res.end(data)
  // }

  create = async (req, res) => {
    const message = await this.customersModel.create(req.body)
    res.end(message)
  }

  update = async (req, res) => {
    const message = await this.customersModel.update(req.params.id, req.body)
    res.end(message)
  }

  // updateAtributte = async (req, res) => {
  //   const message = await this.customersModel.updateAtributte()
  //   res.end(message)
  // }

  delete = async (req, res) => {
    const message = await this.customersModel.delete(req.params.id)
    res.end(message)
  }
}
