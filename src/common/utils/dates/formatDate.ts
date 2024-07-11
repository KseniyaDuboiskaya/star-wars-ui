import { format } from 'date-fns'

const DATE_FORMAT = 'dd MMM yyyy'

const formatDate = (date: string) => {
    return `${format(new Date(date), DATE_FORMAT)}`
}

export { formatDate }
