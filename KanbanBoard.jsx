import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialData = {
  tasks: { 'task-1': { id: 'task-1', content: 'Design wireframe' } },
  columns: {
    'column-1': { id: 'column-1', title: 'To Do', taskIds: ['task-1'] }
  },
  columnOrder: ['column-1'],
};

export default function KanbanBoard() {
  // Add drag logic, render columns
  return <div className="p-4">Kanban Logic here</div>;
}
