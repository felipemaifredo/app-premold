import { useState, useEffect } from "react"
import { fetchGetData } from "../../lib/fetchGetData"
import "../styles/sections/banners.styles.css"
export const BannerSection = () => {
    const [bannersData, setBannersData] = useState([])
    const [currentIdx, setCurrentIdx] = useState(0)
    const time = 10000

    useEffect(() => {
        async function fetchData() {
            let data = await fetchGetData("banners")
            setBannersData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((prevIdx) => (prevIdx + 1) % bannersData.length)
        }, time);

        return () => clearInterval(interval)
    }, [bannersData, currentIdx])

    const CreateImageBanner = ({ link, image, idx }) => (
        <a href={link} key={idx}>
            <img src={image} alt={link} />
        </a>
    )

    function handleButtonClick(idx) {
        setCurrentIdx(idx)
    }

    return (
        <div id="banner">
            <div className="carrosel-banner">
                <div
                    className="container-carrosel-banner"
                    style={{ transform: `translateX(${-currentIdx * 100}%)` }}
                >
                    {bannersData.map((bannerData, idx) => (
                        <CreateImageBanner
                            key={bannerData.name}
                            link={bannerData.link}
                            image={bannerData.img}
                            idx={idx}
                        />
                    ))}
                </div>
            </div>
            <div className="banner-buttons">
                {bannersData.map((_, idx) => (
                    <button
                        key={idx}
                        className={`banner-button ${idx === currentIdx ? 'active' : ''}`}
                        onClick={() => handleButtonClick(idx)}
                    ></button>
                ))}
            </div>
        </div>
    )
}