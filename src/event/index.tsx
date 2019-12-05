// @ts-ignore
const nativeInputValueSetter = (typeof window !== "undefined" && window) ? Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set : () => null

export const dispatchOnChangeValueEvent = (inputRef: React.RefObject<HTMLInputElement>, value: any) => {
    if (!inputRef.current) {
        return
    }
    // @ts-ignore
    nativeInputValueSetter.call(inputRef.current, value)

    const inputEvent = new Event('input', { bubbles: true })
    inputRef.current.dispatchEvent(inputEvent)
}
