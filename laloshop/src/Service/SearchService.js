import * as CallApi from '~/Utils/CallApi';

export const search = async (q, type = 'less') => {
    try {
        const res = await CallApi.getApi(`https://tiktok.fullstack.edu.vn/api/users/search?`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {}
};
