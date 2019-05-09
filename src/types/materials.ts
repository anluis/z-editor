import { IMAGE, LOTTIE, VIDEO, AUDIO } from '../constants/coms'
export interface baseMaterial {
  type: string
  name: string
  desc: string
  _id?: string
  created_at?: string
  updated_at?: string
}

export interface ImgMaterial extends baseMaterial {
  type: typeof IMAGE
  imgUrl: string
}

export interface LottieMaterial extends baseMaterial {
  type: typeof LOTTIE
  imgUrl: string
  path: string
  assetsPath: string
}

export interface VideoMaterial extends baseMaterial {
  type: typeof VIDEO
  videoUrl: string
  imgUrl: string
}

export interface AudioMaterial extends baseMaterial {
  type: typeof AUDIO
  audioUrl: string
}

export type Material = ImgMaterial | LottieMaterial | VideoMaterial | AudioMaterial