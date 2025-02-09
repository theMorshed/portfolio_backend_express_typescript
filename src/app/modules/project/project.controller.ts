import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { StatusCodes } from 'http-status-codes';
import { createProjectService, deleteProjectService, getAllProjectService, getProjectService, updateProjectService } from "./project.service";

export const createProject = catchAsync(async(req, res) => {    
    const project = await createProjectService(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Project created successfully',
        data: project
    })
});

export const getAllProject = catchAsync(async(req, res) => {    
    const projects = await getAllProjectService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Projects retrieved successfully',
        data: projects
    })
});

export const getProject = catchAsync(async(req, res) => { 
    const { projectId } = req.params;   
    const project = await getProjectService(projectId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Project-${projectId} retrieved successfully`,
        data: project
    })
});

export const updateProject = catchAsync(async(req, res) => { 
    const { projectId } = req.params;   
    const project = await updateProjectService(projectId, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Project-${projectId} updated successfully`,
        data: project
    })
});

export const deleteProject = catchAsync(async(req, res) => { 
    const { projectId } = req.params;   
    const project = await deleteProjectService(projectId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Project-${projectId} deleted successfully`,
        data: project
    })
});