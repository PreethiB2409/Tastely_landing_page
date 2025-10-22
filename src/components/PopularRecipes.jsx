import React from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../data/recipes';

export default function PopularRecipes() {
  return (
    <section id="recipes" className="popular-recipes">
      <div className="popular-recipes-header">
        <h2 className="popular-recipes-title">Popular recipes</h2>
      <a  className="popular-recipes-link">See all</a>
      </div>
      
      <div className="popular-recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}