import Category from "../models/category.model.js"

async function createCategory(name, userId) {
    const newCategory = await Category.create({
        name: name,
        userId: userId
    })

    return newCategory
}

async function getCategories(userId) {
    const categories = await Category.find({
        userId: userId
    }).sort({ name: 1 })

    return categories
}

async function updateCategory(categoryId, name, userId) {
    const updatedCategory = await Category.findOneAndUpdate(
        {
            _id: categoryId,
            userId: userId
        },
        {
            $set: { name: name }
        },
        {
            new: true,
            runValidators: true
        }
    )

    if (!updatedCategory) {
        const error = new Error("Category not found")
        error.code = "CATEGORY_NOT_FOUND"
        throw error
    }

    return updatedCategory
}

async function deleteCategory(categoryId, userId) {
    const deletedCategory = await Category.findOneAndDelete({
        _id: categoryId,
        userId: userId
    })

    if (!deletedCategory) {
        const error = new Error("Category not found")
        error.code = "CATEGORY_NOT_FOUND"
        throw error
    }

    return deletedCategory
}

export { deleteCategory }

export { updateCategory }

export { getCategories }

export { createCategory }