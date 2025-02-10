import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createMessageService } from "./message.service";

export const createMessage = catchAsync(async (req, res) => {
    const message = await createMessageService(req.body);

    sendResponse(res, {
        success: true,
        message: 'Message created successfully',
        statusCode: StatusCodes.CREATED,
        data: message
    })
});