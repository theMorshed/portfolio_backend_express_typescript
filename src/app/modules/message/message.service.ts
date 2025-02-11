import { TMessage } from "./message.types";
import Message from "./message.model";

export const createMessageService = async (payload: TMessage) => {
    const message = await Message.create(payload);
    return message;
};

export const getAllMessagesService = async () => {
    const messages = await Message.find({});
    return messages;
}

