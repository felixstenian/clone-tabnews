import { useEffect, useState } from "react";

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

function Home() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const targetDate = new Date(2025, 1, 29).getTime()

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance > 0) {
                const days = Math.floor(distance / (DAY))
                const hours = Math.floor(distance % (DAY) / (HOUR))
                const minutes = Math.floor(distance % (HOUR) / (MINUTE))
                const seconds = Math.floor(distance % (MINUTE) / SECOND) 

                setTimeLeft({ days, hours, minutes, seconds })
            }

        }, SECOND)
        return () => clearInterval(timer)
    }, [])

    return (
        <div style={styles.container}>
            {/* <h1 styles={styles.title}>Contagem Regressiva para o Carnaval 🎉</h1> */}
            <div style={styles.timeContainer}>
                <div style={styles.timeBlock}>
                    <div style={styles.timeNumber}>{timeLeft.days}</div>
                    <div style={styles.timeLabel}>Dias</div>
                </div>
                <div style={styles.timeBlock}>
                    <div style={styles.timeNumber}>{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div style={styles.timeLabel}>Horas</div>
                </div>
                <div style={styles.timeBlock}>
                    <div style={styles.timeNumber}>{timeLeft.minutes}</div>
                    <div style={styles.timeLabel}>Minutos</div>
                </div>
                <div style={styles.timeBlock}>
                    <div style={styles.timeNumber}>{timeLeft.seconds}</div>
                    <div style={styles.timeLabel}>Segundos</div>
                </div>
            </div>
            <h1 styles={styles.title}>Para o Carnaval 🎉💃🏽🎊</h1>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        margin: '-8px'
    },
    title: {
        fontSize: '2.5em',
        marginBottom: '30px',
        color: '#00ff88'
    },
    timeContainer: {
        display: 'flex',
        gap: '30px',
        flexWraper: 'wrap',
        justifyContent: 'center'
    },
    timeBlock: {
        backgroundColor: '#2d2d2d',
        padding: '20px',
        borderRadius: '10px',
        minWidth: '120px'
    },
    timeNumber: {
        fontSize: '3em',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#00ff88'
    },
    timeLabel: {
        fontSize: '1.2em',
        color: '#cccccc'
    }
}

export default Home;