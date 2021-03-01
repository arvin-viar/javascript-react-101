import styled from "styled-components";
import bgImage from "../assets/images/Greatest-NBA-Players-Best-NBA-Players-Ranking-NBA-Players-NBA-Goat.-Who-Is-The-Best-Player-Ever-5x8.jpg";

const HomeBanner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 250px;
    position: relative;
    background: url(${bgImage}) no-repeat top center;
    background-size: cover;
    .banner__details {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        color: #ffffff;
        background: rgba(0,0,0,0.5);
        p {
            margin-bottom: 15px;
            font-size: 18px;
            @media (min-width: 768px) {
                font-size: 14px;
            }
        }
        &-wrap {
            position: absolute;
            top: 50%;
            left: 0;
            padding: 0 15px;
            transform: translate(0, -50%);
            color: #ffffff;
            text-align: center;
            @media (min-width: 1024px) {
                text-align: left;
            }
        }
        &-title {
            margin-bottom: 15px;
            font-size: 3em;
            text-align: center;
            @media (min-width: 768px) {
                font-size: 5em;
                text-align: left;
            }
            @media (min-width: 1024px) {
                font-size: 8em;
            }
        }
        &-desc {
            display: none;
            @media (min-width: 768px) {
                display: block;
            }
        }
        @media (min-width: 768px) {
            align-items: normal;
        }
    }
    @media (min-width: 768px) {
        height: 380px;
    }
    @media (min-width: 1024px) {
        height: 500px;
    }
`

function Banner({id, title, body}) {
    return (
        <HomeBanner>
            <div className="banner__details">
                <p>Hello! Welcome to</p>
                <h1 className="banner__details-title">NBA Trends</h1>
                <p className="banner__details-desc">
                    Quisque ac tellus fringilla, gravida ex id, ultrices leo.
                    Cras tempus elit eget lorem consectetur sollicitudin.
                    Morbi ut interdum nibh. Cras dui quam, congue eu massa non,
                    consequat fermentum massa. Vestibulum sodales, ligula at
                    consectetur dapibus, dolor enim condimentum risus, ac
                    consequat lorem ipsum eu mauris. Pellentesque ullamcorper
                    elementum facilisis. Aliquam tincidunt elit eu justo scelerisque,
                    ut cursus lectus gravida. Vivamus suscipit nunc est, eu molestie
                    lorem congue venenatis. Integer tristique leo eu pharetra
                    condimentum. Nunc pharetra aliquet quam eget pellentesque.
                    Proin suscipit sapien at enim egestas aliquet. Nam ut dictum
                    ipsum. Aenean iaculis urna a tempor pharetra.
                </p>
            </div>
        </HomeBanner>
    )
}

export default Banner;
