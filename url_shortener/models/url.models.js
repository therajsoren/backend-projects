import mongoose, {Schema} from "mongoose";
import ShortUniqueId from "short-unique-id";

const urlSchema = new Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        default: ShortUniqueId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

export const Url = mongoose.model('Url', urlSchema);