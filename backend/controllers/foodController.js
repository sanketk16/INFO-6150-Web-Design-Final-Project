import Food from '../models/foodModel.js'
import asyncHandler from 'express-async-handler'

const getFoods = asyncHandler(async (req, res) => {
  const food = await Food.find({})
  res.json(food)
})

const getFoodbyID = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id)

  if (food) {
    res.json({
      _id: food._id,
      name: food.name,
      description: food.description,
      price: food.price,
      category: food.category,
      image: food.image,

    })
  } else {
    res.status(404)
    throw new Error('food not found')
  }
})

const createFood = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    image,

  } = req.body
  const newfood = await Food({
    name,
    description,
    price,
    category,
    image,

  })
  try {
    await newfood.save()
    res.send('Food Added Successfully')
  } catch (error) {
    return res.status(400).json({ error });
  }
})


const deleteFood = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id)

  if (food) {
    await food.remove()
    res.json({ message: 'item removed' })
  } else {
    res.status(404)
    throw new Error('Item not found')
  }
})

const updateFood = asyncHandler(async(req,res) => {
  const {
    name,
    description,
    price,
    category,
    image,

  } = req.body

  const foods = await Food.findById(req.params.id)

  if (foods) {
    foods.name = name,
    foods.description = description,
    foods.price = price,
    foods.category = category,
    foods.image = image

    const updateFood = await foods.save()
    res.json(updateFood)
  } else {
    res.status(404)
    throw new Error('Food Item Not found')
  }


})

export { getFoods, getFoodbyID, createFood, deleteFood,updateFood }