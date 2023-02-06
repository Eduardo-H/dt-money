export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('us', {
  currency: 'USD',
  minimumFractionDigits: 2,
})
