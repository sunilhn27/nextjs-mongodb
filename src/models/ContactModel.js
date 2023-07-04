import mongoose, { Schema } from "mongoose"

const contactSchema = new Schema({

    yourName: {
        type: String,
        required: true,
        minLength: 2,

    },
    email: {
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }

})

const ContactModel = mongoose.models.ContactModel || mongoose.model("ContactModel", contactSchema)

export default ContactModel;