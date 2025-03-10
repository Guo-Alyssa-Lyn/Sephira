import { Node, Connection, PhysicsParams } from './types';

export const applyPhysics = (nodes: Node[], connections: Connection[], params: PhysicsParams) => {
  nodes.forEach(node => {
    // Apply forces
    node.velocity.x *= (1 - params.friction);
    node.velocity.y *= (1 - params.friction);

    // Apply gravity
    node.velocity.y += params.gravity;

    // Update position
    node.x += node.velocity.x;
    node.y += node.velocity.y;

    // Apply repulsion at boundaries
    if (node.x < 0 || node.x > window.innerWidth) {
      node.velocity.x *= -params.repulsion;
    }
    if (node.y < 0 || node.y > window.innerHeight) {
      node.velocity.y *= -params.repulsion;
    }
  });
};

export const clampVelocity = (velocity: { x: number; y: number }, maxSpeed: number) => {
  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
  if (speed > maxSpeed) {
    velocity.x = (velocity.x / speed) * maxSpeed;
    velocity.y = (velocity.y / speed) * maxSpeed;
  }
  return velocity;
}; 