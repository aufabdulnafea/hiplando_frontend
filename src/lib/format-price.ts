
export function formatPrice(price: number) {
    return Intl.NumberFormat("de-DE",
        {
            style: "currency",
            currency: "EUR"
        })
        .format(price)
}