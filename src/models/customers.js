import customersSchema from '../schemas/customers'

export class CustomersModel {
  async getAll () {
    let data
    try {
      data = await customersSchema.find()
    } catch (e) {
      data = e
    }
    return data
  }

  // async getById (id) {
  //   let data
  //   try {
  //     data = await customersSchema.findOne({ id })
  //   } catch (e) {
  //     data = e
  //   }
  //   return data
  // }

  async create (customer) {
    let message
    try {
      const data = await customersSchema.insertOne(customer)
      if (data) {
        message = 'Insert'
      }
    } catch (e) {
      message = e
    }
    return message
  }

  async update (id, customer) {
    let message
    try {
      const data = await customersSchema.updateOne(
        { identification: id },
        customer
      )
      if (data) {
        message = 'Updated'
      }
    } catch (e) {
      message = e
    }
    return message
  }

  // async updateAtributte () {
  //   let message
  //   try {
  //     const data = await customersSchema.updateOne()
  //     if (data) {
  //       message = 'Updated'
  //     }
  //   } catch (e) {
  //     message = e
  //   }
  //   return message
  // }

  async delete (id) {
    let message
    try {
      const data = await customersSchema.deleteOne({ id })
      if (data) {
        message = 'Updated'
      }
    } catch (e) {
      message = e
    }
    return message
  }
}
