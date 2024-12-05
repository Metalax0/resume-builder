export const executeNTimes = (count: number, funct: () => void) => {
    for (let i = 0; i < count; i++) {
        funct();
    }
};
