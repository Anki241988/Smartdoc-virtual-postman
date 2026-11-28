import mongoose from "mongoose"

const documentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        personName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100
        },

        year: {
            type: Number,
            required: true,
            min: 1900,
            max: 2100,
            validate: {
                validator: Number.isInteger,
                message: "Year must be an integer"
            }
        }
    },
    { timestamps: true }
)

const Document = mongoose.model("Document", documentSchema)

export default Document