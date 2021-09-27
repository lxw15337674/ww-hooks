import _ from "lodash"

type Fn = (...args: any[]) => any

export default function setDefaultArguments<F extends Fn = Fn, P extends any[] = Parameters<F>>(fn: F, ...defaultArguments: Parameters<F>): (...args: P) => ReturnType<F> {
    return (...args: P) => {
        const mergeArgs = defaultArguments.map((v, i) => {
            if (_.isObject(v)) {
                return _.merge(v, args[i])
            }
            return args[i]
        })
        return fn(...mergeArgs)
    }
}

