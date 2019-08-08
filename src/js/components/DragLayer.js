import React from 'react';
import { useDragLayer } from 'react-dnd';
import Card from './Card';

function getCardPreviewStyle(offset) {
  const transform = `translate(${offset.x}px, ${offset.y}px) rotate(15deg)`;
  return {
    transform,
    WebkitTrasnform: transform,
    width: '17rem',
    color: 'black',
  };
}

function renderItem(item, offSet) {
  if (offSet) {
    switch (item.type) {
      case 'CARD': return <div style={getCardPreviewStyle(offSet)}><Card cardId={item.id} /></div>;
      default: return null;
    }
  }
  return null;
}

const DragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging) return null;
  return (
    <div id="dragging-layer">
      <div className="dragging-container">
        {renderItem(item, currentOffset)}
      </div>
    </div>
  );
};

export default DragLayer;
