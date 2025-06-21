import {BaseChart, type BaseChartProps} from "./BaseChart.tsx";
import {useMemo} from "react";

type ChartProps = {
    data: number[];
    maxDataPoints: number;
    fill: BaseChartProps["fill"];
    stroke: BaseChartProps["stroke"];
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

    return <BaseChart data={preparedData} fill={props.fill} stroke={props.stroke}/>
}

export {
    Chart,
    type ChartProps
}