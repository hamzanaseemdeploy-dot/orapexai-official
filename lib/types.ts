export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  delay: number;
}

export enum AnimationStage {
  Hidden,
  Burst,
  LaptopOpen,
  ChatActive
}
