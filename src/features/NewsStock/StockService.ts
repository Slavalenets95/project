import Http from '../../app/Http'

class StockService {
  static get(id: string) {
    return Http.get<StockDto>(`rest/${id}`)
  }
}

export interface StockDto {
  stockTitle: string
  stockText: string
  stockImg: string
  startDate: string
}

export default StockService
