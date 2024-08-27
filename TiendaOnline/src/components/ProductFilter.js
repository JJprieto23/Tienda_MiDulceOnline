import React from 'react';

function ProductFilter({ setFilters }) {
    const handleCategoryChange = (e) => {
        setFilters(prevFilters => ({ ...prevFilters, category: e.target.value }));
    };

    const handleRegionChange = (e) => {
        setFilters(prevFilters => ({ ...prevFilters, region: e.target.value }));
    };

    const handlePriceChange = (e) => {
        setFilters(prevFilters => ({ ...prevFilters, priceRange: e.target.value }));
    };

    return (
        <div className="product-filter">
            <label>
                Categoría:
                <select onChange={handleCategoryChange}>
                    <option value="">Todas</option>
                    <option value="caramelos">Caramelos</option>
                    <option value="chocolates">Chocolates</option>
                    <option value="golosinas">Golosinas</option>
                </select>
            </label>
            <label>
                Región:
                <select onChange={handleRegionChange}>
                    <option value="">Todas</option>
                    <option value="antioquia">Antioquia</option>
                    <option value="bogota">Bogotá</option>
                    <option value="cundinamarca">Cundinamarca</option>
                </select>
            </label>
            <label>
                Rango de Precio:
                <select onChange={handlePriceChange}>
                    <option value="">Todos</option>
                    <option value="0-10">0 - 10 USD</option>
                    <option value="10-20">10 - 20 USD</option>
                    <option value="20-30">20 - 30 USD</option>
                </select>
            </label>
        </div>
    );
}

export default ProductFilter;
