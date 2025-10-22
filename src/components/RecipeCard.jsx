import React from 'react';

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-image-wrapper">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="recipe-card-image"
        />
      </div>
      <div className="recipe-card-content">
        <h3 className="recipe-card-title">{recipe.title}</h3>
      </div>
    </div>
  );
}