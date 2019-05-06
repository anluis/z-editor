import { IMAGE, LOTTIE, VIDEO, AUDIO } from '../constants/coms'
export interface baseMaterial {
  type: string
  name: string
  _id: string
  created_at?: string
  updated_at?: string
}

export interface ImgMaterial {
  type: typeof IMAGE
  imgUrl: string
}

export interface LottieMaterial {
  type: typeof LOTTIE
  imgUrl: string
  path: string
  assetsPath: string
}

export interface VideoMaterial {
  type: typeof VIDEO
  videoUrl: string
}

export interface MusicMaterial {
  type: typeof AUDIO
  audioUrl: string
}

export type Material = ImgMaterial | LottieMaterial | VideoMaterial | MusicMaterial