import { Mesh, Object3D, Vector3 } from 'three';
import { ThreeElements } from '@react-three/fiber'

declare module '@react-three/fiber' {
  export interface ThreeElements {
    mesh: Mesh;
  }

  export interface CanvasProps {
    camera?: {
      position?: [number, number, number];
      fov?: number;
    };
    gl?: {
      antialias?: boolean;
      alpha?: boolean;
      powerPreference?: 'default' | 'high-performance' | 'low-power';
    };
    dpr?: [number, number];
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export interface UseFrameProps {
    state: {
      clock: {
        getDelta: () => number;
      };
    };
    delta: number;
  }

  export const Canvas: React.FC<CanvasProps>;
  export function useFrame(callback: (props: UseFrameProps) => void): void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: ThreeElements['mesh']
      meshStandardMaterial: ThreeElements['meshStandardMaterial']
      ambientLight: ThreeElements['ambientLight']
      pointLight: ThreeElements['pointLight']
    }
  }
}

export {} 