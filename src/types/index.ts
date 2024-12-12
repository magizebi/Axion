export interface Note {
  id: string;
  measure: number;
  position: number;
  channel: number;
  type: NoteType;
}

export enum NoteType {
  NORMAL = 'normal',
  LONG = 'long',
  MINE = 'mine'
}

export interface ChartMetadata {
  title: string;
  artist: string;
  editor: string;
  bpm: number;
  level: number;
  genre: string;
}
