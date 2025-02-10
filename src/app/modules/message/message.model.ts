import { model, Model, Schema } from "mongoose";
import { TMessage } from "./message.types";

const MessageSchema: Schema<TMessage> = new Schema(
{
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    message: {
        type: String,        
        required: [true, 'Name is required'],
        trim: true
    }
},
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Message: Model<TMessage> = model<TMessage>('Message', MessageSchema);

export default Message;