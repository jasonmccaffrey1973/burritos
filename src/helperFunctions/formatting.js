export const formatPrice = (price) => 
{
    const dollarUSLocale = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })
    return dollarUSLocale.format(price)
}