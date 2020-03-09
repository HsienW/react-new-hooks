export const userListApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve([
                    {
                        name: '123'
                    },
                    {
                        name: '456'
                    },
                    {
                        name: '789'
                    }
                ]);
            }, 1000);
        } else {
            reject([]);
        }
    });
};