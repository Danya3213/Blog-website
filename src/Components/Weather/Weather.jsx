import React, { useRef } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiNightAltCloudy, WiSnow, WiStrongWind, WiHumidity, WiRaindrop } from 'react-icons/wi';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from './Weather.module.scss';
import { Container } from '../Container/Container';

const weekForecast = [
  { day: 'Tue', icon: <WiDaySunny color="#FCC54C" />, max: 29, min: 20 },
  { day: 'Wed', icon: <WiDaySunny color="#FFD700" />, max: 29, min: 20 },
  { day: 'Thu', icon: <WiThunderstorm color="#8888FF" />, max: 29, min: 20 },
  { day: 'Fri', icon: <WiRain color="#4FC3F7" />, max: 29, min: 20 },
  { day: 'Sat', icon: <WiDaySunny color="#FCC54C" />, max: 29, min: 20 },
  { day: 'Sun', icon: <WiNightAltCloudy color="#A390E4" />, max: 29, min: 20 },
  { day: 'Mon', icon: <WiCloud color="#B0BEC5" />, max: 29, min: 20 },
  { day: 'Tue', icon: <WiSnow color="#90CAF9" />, max: 29, min: 20 },
];

const tempLabels = ['5 AM', '8 AM', '11 AM', '2 PM', '5 PM', '8 PM', '11 PM', '2 AM'];
const tempData = [27, 19, 20, 25, 21, 28, 29, 21];

const cities = [
  {
    name: 'Ankara',
    temp: 32,
    time: 'Tuesday 2:00 PM',
    precipitation: '0%',
    humidity: '41%',
    wind: '27 Km/H',
    icon: <WiDaySunny size={48} color="#fff" />,
    bg: 'linear-gradient(135deg, #FF9800 0%, #FF5722 100%)',
  },
  {
    name: 'Alaska',
    temp: 16,
    time: 'Tuesday 3:00 AM',
    precipitation: '13%',
    humidity: '52%',
    wind: '12 Km/H',
    icon: <WiRain size={48} color="#fff" />,
    bg: 'linear-gradient(135deg, #2196F3 0%, #00BCD4 100%)',
  },
  {
    name: 'Berlin',
    temp: 24,
    time: 'Tuesday 1:00 PM',
    precipitation: '7%',
    humidity: '59%',
    wind: '18 Km/H',
    icon: <WiDaySunny size={48} color="#fff" />,
    bg: 'linear-gradient(135deg, #43EA5B 0%, #1CB5E0 100%)',
  },
  {
    name: 'Paris',
    temp: 27,
    time: 'Tuesday 10:00 PM',
    precipitation: '10%',
    humidity: '47%',
    wind: '14 Km/H',
    icon: <WiNightAltCloudy size={48} color="#fff" />, 
    bg: 'linear-gradient(135deg, #B721FF 0%, #21D4FD 100%)',
  },
];

export function Weather() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  React.useEffect(() => {
    function renderChart() {
      const ctx = chartRef.current.getContext('2d');
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
      const isMobile = window.innerWidth <= 480;
      const isFold = window.innerWidth > 480 && window.innerWidth <= 900;
      const lineWidth = isMobile || isFold ? 2 : 3;
      const labelFontSize = isMobile ? 12 : isFold ? 13 : 18;
      const xTickFontSize = isMobile ? 10 : isFold ? 12 : 16;
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: tempLabels,
          datasets: [
            {
              label: 'Температура (°C)',
              data: tempData,
              fill: false,
              borderColor: '#FCC54C',
              backgroundColor: '#FCC54C',
              tension: 0.4,
              cubicInterpolationMode: 'monotone',
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: lineWidth,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: false },
            datalabels: {
              anchor: 'end',
              align: 'top',
              color: '#FCC54C',
              font: { weight: 'bold', size: labelFontSize },
              formatter: value => value,
              offset: 8,
            },
            tooltip: { enabled: false },
          },
          hover: { mode: null },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                color: '#888',
                font: { size: xTickFontSize, weight: 'bold' },
                padding: 8,
              },
            },
            y: {
              grid: { display: false, drawBorder: false },
              ticks: { display: false },
              min: Math.min(...tempData) - 2,
              max: Math.max(...tempData) + 2,
            },
          },
        },
        plugins: [ChartDataLabels],
      });
    }

    renderChart();
    window.addEventListener('resize', renderChart);
    return () => {
      window.removeEventListener('resize', renderChart);
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, []);

  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayName = days[now.getDay()];
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return (
    <Container className={styles.weatherInner}>
    <div className={`${styles.leftBlock} ${styles.Container}`}>
      {/* Левая часть — как было */}
      <div className={styles.weatherHeader}>
        <div className={styles.weatherMain}>
          <WiDaySunny size={64} color="#FCC54C" />
          <div>
            <div className={styles.tempMain}>29°<span>C</span></div>
            <div className={styles.weatherDetails}>
              <span><WiRaindrop size={20}/> Precipitation: 2%</span>
              <span><WiHumidity size={20}/> Humidity: 70%</span>
              <span><WiStrongWind size={20}/> Wind: 3 Km/H</span>
            </div>
          </div>
        </div>
        <div className={styles.weatherCity}>
          <div>New York, NY</div>
          <div>{dayName} {hours}:{minutes}</div>
        </div>
      </div>
      <div className={styles.weatherChartBlock}>
        <canvas
          ref={chartRef}
          className={styles.weatherChartCanvas}
          style={{ width: '100%', height: '40vw', minHeight: 180, maxHeight: 300 }}
        ></canvas>
      </div>
      <div className={styles.weatherWeek}>
        {weekForecast.map((item, idx) => (
          <div key={idx} className={styles.weatherDay + (idx === 0 ? ' ' + styles.active : '')}>
            <div className={styles.dayName}>{item.day}</div>
            <div className={styles.dayIcon}>{item.icon}</div>
            <div className={styles.dayMax}>{item.max}°</div>
            <div className={styles.dayMin}>{item.min}°</div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.rightBlock}>
      {cities.map((city, idx) => (
        <div
          key={city.name}
          className={styles.cityCard}
          style={{ background: city.bg }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 13, color: '#fff', opacity: 0.9, marginBottom: 2 }}>Precipitation: {city.precipitation}</div>
              <div style={{ fontSize: 13, color: '#fff', opacity: 0.9, marginBottom: 2 }}>Humidity: {city.humidity}</div>
              <div style={{ fontSize: 13, color: '#fff', opacity: 0.9, marginBottom: 8 }}>Wind: {city.wind}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{city.name}</div>
              <div style={{ fontSize: 13, color: '#fff', opacity: 0.9 }}>{city.time}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {city.icon}
              <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginTop: 4 }}>{city.temp}°<span style={{ fontSize: 18 }}>C</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
    // <Container className={`${styles.weatherContainer} ${styles.weatherWidget} ${styles.Container}`}>
    //   {/* <section className={styles.weatherWidget}> */}
    //     <Container className={styles.weatherInner}>
    //       <div className={`${styles.leftBlock} ${styles.Container}`}>
    //         {/* Левая часть — как было */}
    //         <div className={styles.weatherHeader}>
    //           <div className={styles.weatherMain}>
    //             <WiDaySunny size={64} color="#FCC54C" />
    //             <div>
    //               <div className={styles.tempMain}>29°<span>C</span></div>
    //               <div className={styles.weatherDetails}>
    //                 <span><WiRaindrop size={20}/> Precipitation: 2%</span>
    //                 <span><WiHumidity size={20}/> Humidity: 70%</span>
    //                 <span><WiStrongWind size={20}/> Wind: 3 Km/H</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className={styles.weatherCity}>
    //             <div>New York, NY</div>
    //             <div>{dayName} {hours}:{minutes}</div>
    //           </div>
    //         </div>
    //         <div className={styles.weatherChartBlock}>
    //           <canvas
    //             ref={chartRef}
    //             className={styles.weatherChartCanvas}
    //             style={{ width: '100%', height: '40vw', minHeight: 180, maxHeight: 300 }}
    //           ></canvas>
    //         </div>
    //         <div className={styles.weatherWeek}>
    //           {weekForecast.map((item, idx) => (
    //             <div key={idx} className={styles.weatherDay + (idx === 0 ? ' ' + styles.active : '')}>
    //               <div className={styles.dayName}>{item.day}</div>
    //               <div className={styles.dayIcon}>{item.icon}</div>
    //               <div className={styles.dayMax}>{item.max}°</div>
    //               <div className={styles.dayMin}>{item.min}°</div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className={styles.rightBlock}>
    //         {cities.map((city, idx) => (
    //           <div
    //             key={city.name}
    //             className={styles.cityCard}
    //             style={{ background: city.bg }}
    //           >
    //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    //               <div>
    //                 <div style={{ fontSize: 13, color: '#fff', opacity: 0.9, marginBottom: 2 }}>Precipitation: {city.precipitation}</div>
    //                 <div style={{ fontSize: 13, color: '#fff', opacity: 0.9, marginBottom: 2 }}>Humidity: {city.humidity}</div>
    //                 <div style={{ fontSize: 13, color: '#fff', opacity: 0.9, marginBottom: 8 }}>Wind: {city.wind}</div>
    //                 <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{city.name}</div>
    //                 <div style={{ fontSize: 13, color: '#fff', opacity: 0.9 }}>{city.time}</div>
    //               </div>
    //               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //                 {city.icon}
    //                 <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginTop: 4 }}>{city.temp}°<span style={{ fontSize: 18 }}>C</span></div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </Container>
    //   {/* </section> */}
    // </Container>
  );
}
