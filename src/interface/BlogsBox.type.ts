export interface BlogsBoxType{
    titleEn:string
    titleRu:string
    titleUz:string
    date : string
    keywords : string
    slug:string
    descriptionEn: {
      slice(arg0: number, arg1: number): import("react").ReactNode
      text:string
    }
    descriptionRu: {
      slice(arg0: number, arg1: number): import("react").ReactNode
      text:string
    }
    descriptionUz :{
      slice(arg0: number, arg1: number): import("react").ReactNode
      text:string
    }
    image :{
      url:string
    }
}