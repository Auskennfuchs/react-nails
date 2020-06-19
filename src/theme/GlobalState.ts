import { useState, useEffect } from "react"

export type SubscribeFunction = (val: any) => void

class GlobalState<StateType> {

    private value: StateType
    private subscribers: Array<SubscribeFunction> = []

    constructor(initialValue: StateType) {
        this.value = initialValue
    }

    public getValue = (): StateType => {
        return this.value
    }

    public setValue = (newState: StateType) => {
        if (this.getValue() === newState) {
            return
        }
        this.value = newState
        this.subscribers.forEach(subscriber => {
            subscriber(this.value)
        })
    }

    public subsribe = (itemToScubscribe: SubscribeFunction) => {
        if (this.subscribers.indexOf(itemToScubscribe) > -1) {
            // already in list
            return
        }
        this.subscribers.push(itemToScubscribe)
    }

    public unsubscribe = (itemToUnsubscribe: SubscribeFunction) => {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== itemToUnsubscribe)
    }
}

export default GlobalState

export const useGlobalState = (globalState: GlobalState<any>): Array<any> => {
    const [, setLocalState] = useState()
    const state: any = globalState.getValue()

    const reRender = () => {
        setLocalState({})
    }

    useEffect(() => {
        globalState.subsribe(reRender)
        return () => {
            globalState.unsubscribe(reRender)
        }
    }, [])

    const setState = (newState: any) => {
        globalState.setValue(newState)
    }

    return [state, setState]
}