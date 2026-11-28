import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} from "../services/category.service.js"

async function create(req, res) {
    const { name } = req.body
    const userId = req.user.id

    const category = await createCategory(name, userId)

    res.status(201).json({
        message: "Category created successfully",
        category
    })
}

async function getAll(req, res) {
    const userId = req.user.id

    const categories = await getCategories(userId)

    res.status(200).json({
        categories
    })
}

async function update(req, res) {
    const { categoryId } = req.params
    const { name } = req.body
    const userId = req.user.id

    const category = await updateCategory(categoryId, name, userId)

    res.status(200).json({
        message: "Category updated successfully",
        category
    })
}

async function remove(req, res) {
    const { categoryId } = req.params
    const userId = req.user.id

    const category = await deleteCategory(categoryId, userId)

    res.status(200).json({
        message: "Category deleted successfully",
        category
    })
}

export { create }
export { getAll }
export { update }
export { remove }