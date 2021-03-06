import { ProductValidationSchema } from './ProductValidationSchema'
import { validate } from 'class-validator'
import { forEach, pick } from 'lodash'

async function validateProductRequest(productReqObj: any): Promise<any> {
  let validProductData = new ProductValidationSchema(productReqObj)
  let validationResults = await validate(validProductData)
  let constraints = []
  if (validationResults && validationResults.length > 0) {
    forEach(validationResults, item => {
      constraints.push(pick(item, 'constraints', 'property'))
    })
  }
  return constraints
}

export { validateProductRequest }
