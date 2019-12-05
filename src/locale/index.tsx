const getDecimalSeparator = () => {
    const num = 1.1;
    return (Intl.NumberFormat().formatToParts(num).find(part => part.type === 'decimal') || { value: '' }).value;
}

const getThousandSeparator = () => {
    const num = 1000.1;
    return (Intl.NumberFormat().formatToParts(num).find(part => part.type === 'group') || { value: '' }).value;
}

type SystemLocaleType = {
    decimalSeparator: string,
    thousandSeparator: string,
}

const systemLocale: SystemLocaleType = {
    decimalSeparator: getDecimalSeparator(),
    thousandSeparator: getThousandSeparator(),
}

const defaultNumberFormat = new Intl.NumberFormat()

export const convertLocaleNumberToNumber = (number: string | number) => {
    if (typeof number === "number") {
        return number
    }
    const dreg = new RegExp('\\' + systemLocale.decimalSeparator, 'gi')
    const treg = new RegExp('\\' + systemLocale.thousandSeparator, 'gi')
    const normalizedNum = number.replace(treg, '').replace(dreg, '.')
    return Number(normalizedNum)
}

export const convertNumberToLocaleNumber = (number: number, formatter: Intl.NumberFormat = defaultNumberFormat) => formatter.format(number)
