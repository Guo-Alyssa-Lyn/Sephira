import { NetworkNode } from './types';

export interface QuadTree {
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  nodes: NetworkNode[];
  divided: boolean;
  children?: QuadTree[];
}

export const createQuadTree = (nodes: NetworkNode[]): QuadTree => {
  return {
    bounds: { x: 0, y: 0, width: 1, height: 1 },
    nodes,
    divided: false
  };
};

export const updateQuadTree = (tree: QuadTree, nodes: NetworkNode[]): QuadTree => {
  return {
    ...tree,
    nodes
  };
}; 