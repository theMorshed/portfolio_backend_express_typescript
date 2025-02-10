import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBlogService, deleteBlogService, getAllBlogsService, getBlogService, updateBlogService } from "./blog.service";
import User from "../message/message.model";
import Blog from "./blog.model";
import AppError from "../../errors/AppError";

export const createBlog = catchAsync(async (req, res) => {
    const blog = await createBlogService(req.body);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Blog created successfully',
        data: blog
    })
});

export const getAllBlogs = catchAsync(async (req, res) => {
    const blogs = await getAllBlogsService();

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Blogs fetched successfully',
        data: blogs
    })
});

export const getBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const blogs = await getBlogService(id);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Blog fetched successfully',
        data: blogs
    })
});

export const updateBlog = catchAsync(async (req, res) => {
    const id = req.params.id;

    const blogExists = await Blog.findOne({_id: id});
    if (!blogExists) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Blog does not exists!!');
    }

    const blog = await updateBlogService(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Blog updated successfully',
        data: blog
    })
});

export const deleteBlog = catchAsync(async (req, res) => {
    const id = req.params.id;

    const blogExists = await Blog.findOne({_id: id});
    if (!blogExists) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Blog does not exists');
    }

    await deleteBlogService(id);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Blog deleted successfully',
        data: null
    })
});