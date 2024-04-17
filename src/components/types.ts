interface BCFBoard {
  id: number;
  name: string;
}

interface BCF {
  id: number;
  name: string;
  bcfBoards: BCFBoard[];
}

export interface boardInterface {
  id: number;
  name: string;
  bcfs: BCF[];
}
export interface promptsInterface {
  id: number;
  name: string;
}
export interface userInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
