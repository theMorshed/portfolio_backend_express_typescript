import { model, Model, Schema } from "mongoose";
import { TBlog } from "./blog.types";

const BlogSchema: Schema<TBlog> = new Schema(
{
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'content is required']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    category: {
        type: String,
        required: [true, 'category is required']
    },
    isPublished: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
);

BlogSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    },
});

const Blog: Model<TBlog> = model<TBlog>('Blog', BlogSchema);
export default Blog;