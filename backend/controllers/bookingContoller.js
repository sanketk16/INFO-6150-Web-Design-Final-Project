import asyncHandler from 'express-async-handler'
import Bookings from '../models/bookingModel.js'
import Rooms from '../models/roomModel.js'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import Stripe from 'stripe'

const stripe = new Stripe (
  'sk_test_51LQQfcDVLv2wJ0j5tDTmDV6gl3BbSYRHdeP17XtnNwRHCMqoPGN6EtBk9EypXes48wxQZBsPGcvYi9eCO4C9DZC400Gn1vFLBf'
)

const bookRoom = asyncHandler(async (req, res) => {
  const { rooms, userid, fromdate, todate, totalDays, totalAmount, token } =
    req.body

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    })

    console.log(customer.id)

    const payment = await stripe.charges.create(
      {
        amount: totalAmount * 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    )

    if (payment) {
      try {
        const newbooking = new Bookings({
          bookingID: uuidv4(),
          rooms: rooms.name,
          roomid: rooms._id,
          userid,
          totalDays: totalDays,
          fromdate: moment(fromdate).format('DD-MM-YYYY'),
          todate: moment(todate).format('DD-MM-YYYY'),
          totalAmount: totalAmount,
          transactionId: uuidv4(),
          status: 'booked',
        })

        const booking = await newbooking.save()

        const roomtemp = await Rooms.findOne({ _id: rooms._id })

        roomtemp.currentBookings.push({
          bookingid: booking._id,
          fromdate: moment(fromdate).format('DD_MM_YYYY'),
          todate: moment(todate).format('DD-MM-YYYY'),
          userid: userid,
          status: booking.status,
        })

        await roomtemp.save()

        res.send('Room Booked Successfully')
      } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error })
      }
    } else {
      res.send('Payment failed')
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' + error })
  }
})

const getallbookings = asyncHandler(async (req, res) => {
  try {
    const bookings = await Bookings.find({})
    res.send(bookings)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
})

const getUserBookings = asyncHandler(async (req, res) => {
  const { userid } = req.body
  try {
    const bookings = await Bookings.find({ userid: userid }).sort({ _id: -1 })
    res.send(bookings)
  } catch (error) {
    return res.status(400).json({ message: 'Error' })
  }
})

const cancelBookings = asyncHandler(async (req, res) => {
  const { bookingid, roomid } = req.body

  try {
    // const bookingitem = await Bookings.findOne({ _id: bookingid })
    const bookingitem = await Bookings.findOne({ _id: bookingid })
    bookingitem.status = 'cancelled'
    await bookingitem.save()
    const room = await Rooms.findOne({ _id: roomid })
    const bookings = room.currentBookings
    const temp = bookings.filter(
      (booking) =>
        typeof booking.bookingid == 'undefined' ||
        booking.bookingid.toString() !== bookingid
    )
    console.log(temp)
    room.currentBookings = temp
    await room.save()

    res.send('Bookings cancelled sucessfully')
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'error' })
  }
})

export { bookRoom, getallbookings, getUserBookings, cancelBookings }