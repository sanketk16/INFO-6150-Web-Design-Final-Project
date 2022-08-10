import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    tables:{
        type: Number,
        required: true,
        default: 0
    },
    phoneNo:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    images:[],
    description:{
        type: String,
        required: true,
    },
   
}, {
    timestamps: true
})

const Restaurant = mongoose.model('restaurant', restaurantSchema)

export default Restaurant