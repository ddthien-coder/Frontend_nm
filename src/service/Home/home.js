import request from '../index'
//---------------------------------Load--------------------------------------//
//load services
export function loadAllInformation() {
    return request({
        url: '/api/v1/informationcty',
        method: 'get'
    })
}