import { Router } from "express"
import { getRecipes,
         getRecipeById,
	    createRecipe,
	    updateRecipe,
	    deleteRecipe,
		searchRecipes,



} from "../controllers/recipesController.js"



const router = Router()

router.get("/", getRecipes)

router.get("/search", searchRecipes)

// GET one recipe by id
router.get("/:id", getRecipeById)

// CREATE a recipe
router.post("/", createRecipe)

// UPDATE a recipe
router.put("/:id", updateRecipe)

// DELETE a recipe
router.delete("/:id", deleteRecipe)

export default router
