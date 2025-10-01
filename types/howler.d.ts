declare module 'howler' {
  export interface HowlOptions {
    src: string[];
    html5?: boolean;
    volume?: number;
    loop?: boolean;
    preload?: boolean | 'metadata' | 'auto' | 'none';
    onload?: () => void;
    onplay?: () => void;
    onpause?: () => void;
    onstop?: () => void;
    onend?: () => void;
    onloaderror?: (id: number, error: unknown) => void;
    onplayerror?: (id: number, error: unknown) => void;
  }

  export class Howl {
    constructor(options: HowlOptions);
    play(id?: number): number;
    pause(id?: number): void;
    stop(id?: number): void;
    unload(): void;
    playing(id?: number): boolean;
  }
}


