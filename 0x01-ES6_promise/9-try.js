export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const math = mathFunction();
    queue.push(math);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
