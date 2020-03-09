export const userListApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: '123'
                    },
                    {
                        id: 2,
                        name: '456'
                    },
                    {
                        id: 3,
                        name: '789'
                    }
                ]);
            }, 1000);
        } else {
            reject([]);
        }
    });
};