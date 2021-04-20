import React, { useState } from 'react'

/**
 * @description Отслеживает статус загрузки изображения и возвращает отрендеренное изображение
 *  и результат рендера.
 *
 *  Необходим для того, чтобы рендерить скелетон вместо изображения,
 *  если при загрузке возникла ошибка.
 */
const useImageLoad = (src?: string, alt: string = '') => {
  const [isImageLoadFailed, setIsImageLoadFailed] = useState(!src)

  return [
    <img src={src} alt={alt} onError={() => setIsImageLoadFailed(true)} />,
    isImageLoadFailed,
  ]
}

export default useImageLoad
