import React from 'react';
import styles from './Ingredients.css';

export default function RecipeIngredients() {
    const ingredients = [
        '2 lb. russet potatoes, peeled and cut into 1-inch pieces',
        '1 tablespoon flaxseed meal',
        '1 cup white whole wheat flour, plus more for dusting',
        '½ teaspoon regular or sodium-free baking powder',
        'Sea salt, to taste',
        'Freshly ground black pepper, to taste',
        '1½ lb. assorted fresh mushrooms, sliced (9 cups)',
        '4 cups fresh baby spinach or a mix of baby spinach and arugula',
        '½ cup chopped fresh parsley',
        '⅓ cup tahini',
        '¼ cup lemon juice',
        '3 cloves garlic',
        'Crushed red pepper (optional)',
    ];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                {ingredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>
        </div>
    )
}
