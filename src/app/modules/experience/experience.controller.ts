import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { StatusCodes } from 'http-status-codes';
import { createExperienceService, deleteExperienceService, getAllExperienceService, getExperienceService, updateExperienceService } from "./experience.service";

export const createExperience = catchAsync(async(req, res) => {    
    const experience = await createExperienceService(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Experience created successfully',
        data: experience
    })
});

export const getAllExperience = catchAsync(async(req, res) => {    
    const experiences = await getAllExperienceService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Experiences retrieved successfully',
        data: experiences
    })
});

export const getExperience = catchAsync(async(req, res) => { 
    const { experienceId } = req.params;   
    const experience = await getExperienceService(experienceId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Experience-${experienceId} retrieved successfully`,
        data: experience
    })
});

export const updateExperience = catchAsync(async(req, res) => { 
    const { experienceId } = req.params;   
    const experience = await updateExperienceService(experienceId, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Experience-${experienceId} updated successfully`,
        data: experience
    })
});

export const deleteExperience = catchAsync(async(req, res) => { 
    const { experienceId } = req.params;   
    const experience = await deleteExperienceService(experienceId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Experience-${experienceId} deleted successfully`,
        data: experience
    })
});