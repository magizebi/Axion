import { create } from 'zustand';
import { Note, ChartMetadata } from '../types';

interface NoteStore {
  notes: Note[];
  metadata: ChartMetadata;
  addNote: (note: Note) => void;
  removeNote: (noteId: string) => void;
  updateMetadata: (metadata: Partial<ChartMetadata>) => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  metadata: {
    title: '',
    artist: '',
    editor: '',
    bpm: 120,
    level: 1,
    genre: ''
  },
  addNote: (note) => set((state) => ({ 
    notes: [...state.notes, note] 
  })),
  removeNote: (noteId) => set((state) => ({ 
    notes: state.notes.filter(note => note.id !== noteId) 
  })),
  updateMetadata: (metadata) => set((state) => ({ 
    metadata: { ...state.metadata, ...metadata } 
  }))
}));
