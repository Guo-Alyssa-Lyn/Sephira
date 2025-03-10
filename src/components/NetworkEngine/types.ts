export interface PhysicsParams {
  tension: number;
  friction: number;
  repulsion: number;
  gravity: number;
}

export interface NetworkNode {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  size: number;
  color: string;
}

export interface Connection {
  // Define connection properties
}

export interface EngineConfig {
  nodeCount: number;
  connectionThreshold: number;
  performanceMode: 'balanced' | 'quality' | 'performance';
  physics: PhysicsParams;
  maxVelocity: number;
} 