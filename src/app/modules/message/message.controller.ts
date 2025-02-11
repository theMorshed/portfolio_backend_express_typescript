import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createMessageService, getAllMessagesService } from "./message.service";

export const createMessage = catchAsync(async (req, res) => {
    const message = await createMessageService(req.body);

    sendResponse(res, {
        success: true,
        message: 'Message created successfully',
        statusCode: StatusCodes.CREATED,
        data: message
    })
});

export const getAllMessages = catchAsync(async (req, res) => {
    const messages = await getAllMessagesService();

    sendResponse(res, {
        success: true,
        message: 'Message retrieved successfully',
        statusCode: StatusCodes.OK,
        data: messages
    })
});