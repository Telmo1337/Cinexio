import {request} from './http.ts';

import type { Media } from '../test/types/media.ts';


interface MediaResponse {
    data: Media[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalMedia: number;
    count: number;
}

//returns all the media
export const getAllMedia = async (query: {
    page?: number;
    pageSize?: number;
    sort?: string;
    order?: 'asc' | 'desc';
 } = {}): Promise<MediaResponse> => {
    const {page = 1, pageSize = 10, sort = "createdAt", order = "desc"} = query;
    const queryString = `page=${page}&pageSize=${pageSize}&sort=${sort}&order=${order}`;
    return request(`media?${queryString}`);
}; 


