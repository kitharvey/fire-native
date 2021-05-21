const generateKey = (pre: string) => {
    return `${ pre }_${ new Date().getTime() }`;
}

export default generateKey
