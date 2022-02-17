function model(id, url, title, count, height, width, weight) {
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
        comments: ["CommentModel", "CommentModel"]
    }
}

export default model