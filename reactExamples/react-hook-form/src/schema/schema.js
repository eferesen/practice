
import * as yup from 'yup';
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
});

const login = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(20).required(),
})

const nameBio = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

const addressBio = yup.object().shape({
  city: yup.string().required(),
  state: yup.string().required(),
})

const ingredient = yup.object().shape({
  ingredientId: yup.string().required(),
  name: yup.string().required()
})

const instruction = yup.object().shape({
  instructionId: yup.string().required(),
  message: yup.string().required()
})

const recipe = yup.object().shape({
  recipeId: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  instructions: yup.array().of(yup.string()),
  ingredients: yup.array().of(yup.string()),

})

const formSchema = yup.object().shape({
  name: yup.string().required(),
  message: yup.string().required()
})

export default schema
export {login, nameBio, addressBio, ingredient, instruction, recipe, formSchema}