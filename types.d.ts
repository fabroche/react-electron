type Statistics = {
    cpuUsage: number,
    ramUsage: number,
    storageUsage: number
}

type StaticData = {
    totalStorage: number,
    cpuModel: string,
    totalMemoryGB: number
}

interface Window {
    electronAPI: {
        subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
        getStaticData: () => Promise<StaticData>;
    }
}

type EventPayloadMapping = {
    statistics: Statistics,
    getStaticData: StaticData,
}

