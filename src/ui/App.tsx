import {useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useStatistics} from "./hooks/useStatistics.ts";
import {Chart} from "./components/Chart.tsx";

function App() {
    const [count, setCount] = useState(0)

    const statistics = useStatistics(10);

    const cpuUsages = useMemo(
        () => statistics.map(stat => stat.cpuUsage),
        [statistics]
    )

    const ramUsages = useMemo(
        () => statistics.map(stat => stat.ramUsage),
        [statistics]
    )

    const storageUsages = useMemo(
        () => statistics.map(stat => stat.storageUsage),
        [statistics]
    )

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React + Electron</h1>
            <h3>CPU USAGE:</h3>
            <div style={{height: 120}}>
                <Chart
                    data={cpuUsages}
                    maxDataPoints={10}
                    fill={"#0077ff"}
                    stroke={"#0077ff"}
                />
            </div>

            <h3>RAM USAGE:</h3>
            <div style={{height: 120}}>
                <Chart
                    data={ramUsages}
                    maxDataPoints={10}
                    fill={"#104826"}
                    stroke={"#104826"}
                />
            </div>

            <h3>STORAGE USAGE:</h3>
            <div style={{height: 120}}>
                <Chart
                    data={storageUsages}
                    maxDataPoints={10}
                    fill={"#881e1e"}
                    stroke={"#881e1e"}
                />
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
