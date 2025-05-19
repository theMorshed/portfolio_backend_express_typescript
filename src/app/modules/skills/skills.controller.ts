import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { StatusCodes } from 'http-status-codes';
import { createSkillService, deleteSkillService, getAllSkillService, getSkillService, updateSkillService } from "./skills.service";

export const createSkill = catchAsync(async(req, res) => {    
    const skill = await createSkillService(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Skill created successfully',
        data: skill
    })
});

export const getAllSkill = catchAsync(async(req, res) => {    
    const skills = await getAllSkillService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Skills retrieved successfully',
        data: skills
    })
});

export const getSkill = catchAsync(async(req, res) => { 
    const { skillId } = req.params;   
    const skill = await getSkillService(skillId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Skill-${skillId} retrieved successfully`,
        data: skill
    })
});

export const updateSkill = catchAsync(async(req, res) => { 
    const { skillId } = req.params;   
    const skill = await updateSkillService(skillId, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Skill-${skillId} updated successfully`,
        data: skill
    })
});

export const deleteSkill = catchAsync(async(req, res) => { 
    const { skillId } = req.params;   
    const skill = await deleteSkillService(skillId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Skill-${skillId} deleted successfully`,
        data: skill
    })
});