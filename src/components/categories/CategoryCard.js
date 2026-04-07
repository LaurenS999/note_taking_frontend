function CategoryCard({ id, name, code_color, onOpenModal }) {
  return (
    <div className="item-card" key={id} onClick={onOpenModal} 
      style={{
        borderLeft: `8px solid ${code_color}`
      }}>
        <div className="category-header">
            <h3>{name} || {code_color} </h3>
        </div>
    </div>
  );
}

export default CategoryCard;