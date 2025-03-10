export interface QuadTree {
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  nodes: Node[];
  divided: boolean;
  children?: QuadTree[];
}

export const createQuadTree = (nodes: Node[]): QuadTree => {
  return {
    bounds: { x: 0, y: 0, width: 1, height: 1 },
    nodes,
    divided: false
  };
};

export const updateQuadTree = (tree: QuadTree, nodes: Node[]): QuadTree => {
  return {
    ...tree,
    nodes
  };
}; 