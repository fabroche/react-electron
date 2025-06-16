import {BaseChart} from "./BaseChart.tsx";
import {useMemo} from "react";

type ChartProps = {
    data: number[];
    maxDataPoints: number;
}

function Chart(props: ChartProps) {
    const preparedData = useMemo(
        ()=> {
            const points = props.data.map(point => ({value: point * 100}));
            return [
                ...points,
                ...Array.from({length: props.maxDataPoints - points.length}, () => ({value: undefined}))
            ];
        },
        [props.data, props.maxDataPoints]
    );

    return <BaseChart data={preparedData} fill={"#0077ff"} stroke={"#0077ff"}/>
}

export {
    Chart,
    type ChartProps
}