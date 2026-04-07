import '../../styles/card.css'

function NoteCard({ id, title, content, code_color ,updated_at, onOpenModal }) {
  return (
    <div 
      className="item-card" 
      onClick={onOpenModal} 
      style={{
        borderLeft: `8px solid ${code_color}`
      }}
    >
      <div className="note-header">
        <h3>{title}</h3>
        <span className="note-date">
          {new Date(updated_at).toLocaleDateString()}
        </span>
      </div>
      <p>
        {content.length > 80 ? content.substring(0, 80) + "..." : content}
      </p>
    </div>
  );
}

export default NoteCard;