export interface Blog{
    titleEn:string
    titleRu:string
    titleUz:string
    descriptionEn: {
      html:string
    }
    descriptionRu: {
      html:string
      text:string
    }
    descriptionUz :{
      html:string
    }
    image :{
      url:string
    }
}