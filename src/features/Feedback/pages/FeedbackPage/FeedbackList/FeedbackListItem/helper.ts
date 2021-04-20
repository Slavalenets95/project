import { format } from 'date-fns'

export const formatDate = (date: string) => format(new Date(date), 'cccc, d MMMM uuu, H:mm:ss')

export default formatDate
