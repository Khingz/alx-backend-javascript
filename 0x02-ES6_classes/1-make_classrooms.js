import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoom_1 = new ClassRoom(19);
  const classRoom_2 = new ClassRoom(20);
  const classRoom_3 = new ClassRoom(34);
  return [classRoom_1, classRoom_2, classRoom_3];
}
