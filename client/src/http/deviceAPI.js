import { $authHost, $host } from "./index";

export const createType = async (type) => { // Ключевое слово async перед объявлением функции: Обязывает её всегда возвращать промис. Позволяет использовать await в теле этой функции.
    console.log(type); //{name: "sdfsdfsd"}
    const { data } = await $authHost.post('api/type', type) //Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего: Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw. Иначе вернётся результат промиса.
    console.log(data); // {id: 76, name: "sdfsdfsd", updatedAt: "2021-03-19T07:43:08.547Z", createdAt: "2021-03-19T07:43:08.547Z"}
    return data
}

export const deleteType = async (type) => {
    const { data } = await $authHost.post('api/type/delete', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand',)
    return data
}

export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get('api/device', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}
