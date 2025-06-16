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

type UnsuscribeFunction = () => void;

interface Window {
    electronAPI: {
        subscribeStatistics: (callback: (statistics: Statistics) => void) => UnsuscribeFunction;
        getStaticData: () => Promise<StaticData>;
    }
}

type EventPayloadMapping = {
    statistics: Statistics,
    getStaticData: StaticData,
}

