import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

    videoFile: {// cloudnary url
        type: String,
        required: true
    },
    thumbnail: {// cloudnary url
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {// cloudnary url
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.bjectId,
        ref: "User"
    }

}, { timestamps: true })

videoSchema.plugin(mongooseAggregatePaginate)//  it allow us to write aggregate query (aggergate Pipelines)

export const Vidoe = mongoose.model("video", videoSchema)