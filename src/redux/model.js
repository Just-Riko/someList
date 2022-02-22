function model(id, url, title, count, height, width, weight, ...comments) {
    return {
        id: id,
        imageUrl: url,
        name: title,
        count,
        size: {
            width,
            height
        },
        weight,
        comments
    }
}

export default model