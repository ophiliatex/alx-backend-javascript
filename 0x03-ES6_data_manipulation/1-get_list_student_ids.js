export default function getListStudentIds(studentArray) {
  if (Array.isArray(studentArray)) {
    return studentArray.map((o) => o.id);
  }

  return [];
}
